'use strict';

import config from '../../conf/index';
const juice = require('juice');
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const pug = require('pug');
const Letter = require('../model/letter');

const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const SesTransport = require('nodemailer-ses-transport');
const SendGridTransport = require('nodemailer-sendgrid-transport');

// configure gmail: https://nodemailer.com/using-gmail/
// allow less secure apps
const SMTPTransport = require('nodemailer-smtp-transport');

const Transport = config.get('mailer:transport') === 'aws' ?
	SesTransport :
	config.get('mailer:transport') === 'gmail' ?
		SMTPTransport : SendGridTransport;

let options = config.get('mailer:transport') === 'aws' ?
	{
		ses: new AWS.SES(),
		rateLimit: 50
	} :
	config.get('mailer:transport') === 'gmail' ?
		{
			service: "Gmail",
			port: 587,
			debug: true,
			auth: {
				user: config.get('mailer:gmail:user'),
				pass: config.get('mailer:gmail:password')
			}
		} :
		{
			auth: {
				api_user: config.get('mailer:sendGrid:user'),
				api_key: config.get('mailer:password:user'),
			}
		};

const transportEngine = new Transport(options);

const transport = nodemailer.createTransport(transportEngine);

transport.use('compile', htmlToText());

module.exports = function(options) {
	console.log('OPTIONS EMAIL: ', options);

	let message = {};

	let sender = config.get('mailer:senders')[options.from || 'default'];
	if (!sender) {
		throw new Error("Unknown sender:" + options.from);
	}

	message.from = {
		name: sender.fromName,
		address: sender.fromEmail
	};

	// for template
	let locals = Object.create(options);

	locals.config = config;
	locals.sender = sender;

	message.html  =
		pug.renderFile(path.join(config.get('root_path'), 'server/templates/email', options.template) + '.pug', locals);
	message.html  = juice(message.html);


	message.to = (typeof options.to === 'string') ? {address: options.to} : options.to;

	if (process.env.MAILER_REDIRECT) { // for debugging
		message.to = {address: sender.fromEmail};
	}

	if (!message.to.address) {
		throw new Error("No email for recepient, message options:" + JSON.stringify(options));
	}

	message.subject = options.subject;

	message.headers = options.headers;

	// verify connection configuration
	transport.verify(function(error, success) {
		if (error) {
			console.log(error);
		} else {
			console.log('Server is ready to take our messages');
		}
	});

	let transportResponse = transport.sendMail(message, function (error, info) {
		if (error) {
			console.log('Error occured');
			console.log(error.message);
			return;
		}

		console.log('INFO', info);

		Letter.create({
			message,
			info,
			messageId: info.messageId //.replace(/@email.amazonses.com$/, '')
		});

	});

	// return letter;
};
import config from "../../conf";
import path from 'path';

import express from 'express';
const router = express.Router();

import Template from '../model/template';
import Button from '../model/button';

import logger from './../log';
const log = logger(module);

let getSubdomain = subdomains => {
	return subdomains.length <= 1 ? subdomains[0] : null;
};

let getData = async link => {
	let template = await Template.find({ link }).lean(),
		buttons, data = null;

	template = template.length ? template[0] : null;

	if (template) {
		buttons = await Button.find({ template: template }).lean();
		data = Object.assign(template, { buttons: buttons });
	}

	return data;
};

router.get('*', async (req, res, next) => {
	if (req.subdomains.length) {
		let subdomain = getSubdomain(req.subdomains),
			data = await getData(subdomain);

		if (data) {
			res.render('hello', { title: 'Hey', message: 'Hello there!'});
		}
		else {
			res.send('API');
		}
	}
	else {
		next();
	}
});

export default router

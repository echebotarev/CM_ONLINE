import express from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import User from './../model/user';
import Template from './../model/template';
const router = express.Router();

import logger from './../log';
const log = logger(module);
const sendMail = require('./../libs/sendMail');

router
	.get('/', passport.authenticate('instagram'))
	.get(
		'/callback',
		passport.authenticate('instagram', { failureRedirect: '/login' }),
		function(req, res) {
			res.redirect('/');
		}
	);

export default router;
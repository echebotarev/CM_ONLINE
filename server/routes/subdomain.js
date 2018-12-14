import config from "../../conf";
import path from 'path';

import express from 'express';
const router = express.Router();

import logger from './../log';
const log = logger(module);

router.get('*', (req, res, next) => {
	console.log('PARAMS', req.params);
	console.log('URL', req.originalUrl);

	console.log('Sub domains!!!');
	if (req.subdomains.length) {
		console.log('IN SUBDOMAINS');
		console.log('---------------------------');
		res.send('API');
	}
	else {
		console.log('NEXT');
		next();
	}
});

export default router

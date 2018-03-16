import express from 'express';
const router = express.Router();

import config from './../../conf';
import logger from './../log';
const log = logger(module);
import path from 'path';

router.get('', (req, res) => {
		log.info('Router login');

		res.sendFile(path.resolve(config.get('public_path'), 'login.html'));
	}
);

export default router;
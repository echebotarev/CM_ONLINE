import express from 'express';
const router = express.Router();

import logger from './../log';
const log = logger(module);

import { buttons, templates } from './../../client/fixtures';

router.get('/', (req, res) => {
	log.info('Router buttons');

	res.json(buttons);
});

export default router;
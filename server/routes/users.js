import express from 'express';
import passport from 'passport';
const router = express.Router();

import mongoose from './../db/mongoose';

router.get('/info',
	passport.authenticate('bearer', {
		session: false,
		successRedirect: '/',
		failureRedirect: '/login'
	}),
	function (req, res) {
		console.log('Router users', req);

		// req.authInfo is set using the `info` argument supplied by
		// `BearerStrategy`. It is typically used to indicate scope of the token,
		// and used in access control checks. For illustrative purposes, this
		// example simply returns the scope in the response.
		res.json({
			user_id: req.user.userId,
			name: req.user.username,
			scope: req.authInfo.scope
		});
	}
);

module.exports = router;
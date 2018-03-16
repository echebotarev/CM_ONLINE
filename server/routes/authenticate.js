import express from 'express';
import passport from 'passport';
import User from './../model/user';
const router = express.Router();

import logger from './../log';
const log = logger(module);

router.post('/register', function (req, res) {
	console.log('email', req.body.email);
	console.log('password', req.body.password);
	console.log('authenticated', req.isAuthenticated());

	let user = new User({
		email: req.body.email,
		password: req.body.password
	});

	user.save(function (err, user) {
	    if (err) {
	    	log.error(err);
	    	return res.json(err);
	    }

	    passport.authenticate('local')(req, res, function () {
	        res.json(user);
	    });
	    /*req.login(user, function (err) {
	        if (err) {
	        	log.error(err);
	        	res.json(err);
	        }

	        console.log('REQ USER', req.user);

	        res.json(user);
	    });*/
	})
    /*passport.authenticate('bearer', function (err, user, info) {
    	log.info('ROUTE GET authenticate');

        if (err) return next(err);
        if (!user) return res.json({ isAuthenticate: false });

        req.logIn(user, function (err) {
            if (err) return next(err);

            return res.json({ isAuthenticate: true });
        })
    })(req, res, next);*/
});

router.post('/users', (req, res) => {
	const { email } = req.body;
	User.findOne({email}, (err, user) => {
		console.log(user);
		res.json(user);
	})
});

router.post('/login',
	passport.authenticate('bearer', {
		session: false,
		successRedirect: '/',
		failureRedirect: '/login'
	}),
	(req, res, next) => {
		log.info('User authenticated');
		next();
	}
);

router.post('logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

export default router;
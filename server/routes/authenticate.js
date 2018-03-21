import express from 'express';
import passport from 'passport';
import User from './../model/user';
const router = express.Router();

import logger from './../log';
const log = logger(module);

router.post('/register', function (req, res) {
	console.log('email', req.body.email);
	console.log('password', req.body.password);
	console.log('authenticated 1', req.isAuthenticated());

	let user = new User({
		email: req.body.email,
		password: req.body.password
	});

	user.save(function (err, user) {
		if (err) {
			log.error(err);
			return res.json(err);
		}

		req.logIn(user, function (err) {
			if (err) return log.error(err);

			console.log('authenticated 2', req.isAuthenticated());
			return res.json(user);
		})

		/*passport.authenticate('local', (err, user, info) => {
			log.info('ROUTE REGISTER');

			console.log('USER', user);
			console.log('INFO', info);

			if (err) return log.error(err);
			if (!user) return res.json({});

			req.logIn(user, function (err) {
				if (err) return log.error(err);

				return res.json(user);
			})

		})(req, res);*/

		/*passport.authenticate('local', function (err, user, info) {
			log.info('ROUTE REGISTER');

			console.log('USER', user);
			console.log('INFO', info);

			if (err) return next(err);
			if (!user) return res.json({});

			req.logIn(user, function (err) {
				if (err) return next(err);

				return res.json(user);
			})
		})(req, res, next);*/

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

router.get('/users', /*passport.authenticate('local'),*/ (req, res) => {
	console.log('Authenticated', req.isAuthenticated());
	console.log('Session', req.session);
	res.json(passport);
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
	req.session = null;
	res.redirect('/');
});

export default router;
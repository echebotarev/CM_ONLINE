// import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;

import config from './../../conf';

import User from './../model/user';

module.exports =  new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true // req for more complex cases
	},
	function(req, email, password, done) {
		console.log('EMAIL: ', email);

		User.findOne({ email }, function (err, user) {
			if (err) { return done(err); }
			if (!user) { return done(null, false); }

			if (!user.checkPassword(password)) { return done(null, false); }

			return done(null, user);
		});
	}
);

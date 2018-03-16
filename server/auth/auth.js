import passport from 'passport';
const BasicStrategy = require('passport-http').BasicStrategy;
const ClientPasswordStrategy = require('passport-oauth2-client-password').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const LocalStrategy = require('passport-local').Strategy;

import config from './../../conf';

import User from './../model/user';
import Client from './../model/client';
import AccessToken from './../model/accessToken';
import RefreshToken from './../model/refreshToken';

passport.use(new LocalStrategy({
		usernameField: 'email'
	},
	function(email, password, done) {
		User.findOne({ email }, function (err, user) {
			if (err) { return done(err); }
			if (!user) { return done(null, false); }

			if (!user.checkPassword(password)) { return done(null, false); }

			return done(null, user);
		});
	}
));

// 2 Client Password strategies - 1st is required, 2nd is optional
// https://tools.ietf.org/html/draft-ietf-oauth-v2-27#section-2.3.1

// Client Password - HTTP Basic authentication
passport.use(new BasicStrategy({
		usernameField: 'email'
	},
	function (username, password, done) {
		console.log('Basic strategy', username);

		Client.findOne({ clientId: username }, function (err, client) {
			if (err) {
				return done(err);
			}

			if (!client) {
				return done(null, false);
			}

			if (client.clientSecret !== password) {
				return done(null, false);
			}

			return done(null, client);
		});
	}
));

// Client Password - credentials in the request body
passport.use(new ClientPasswordStrategy(
	function (clientId, clientSecret, done) {
		console.log('Client strategy', clientId);

		Client.findOne({ clientId: clientId }, function (err, client) {
			if (err) {
				return done(err);
			}

			if (!client) {
				return done(null, false);
			}

			if (client.clientSecret !== clientSecret) {
				return done(null, false);
			}

			return done(null, client);
		});
	}
));

// Bearer Token strategy
// https://tools.ietf.org/html/rfc6750

passport.use(new BearerStrategy(
	function (accessToken, done) {
		console.log('Bearer strategy', accessToken);

		AccessToken.findOne({ token: accessToken }, function (err, token) {

			if (err) {
				return done(err);
			}

			if (!token) {
				return done(null, false);
			}

			if (Math.round((Date.now() - token.created) / 1000) > config.get('security:tokenLife')) {

				AccessToken.remove({ token: accessToken }, function (err) {
					if (err) {
						return done(err);
					}
				});

				return done(null, false, { message: 'Token expired' });
			}

			User.findById(token.userId, function (err, user) {

				if (err) {
					return done(err);
				}

				if (!user) {
					return done(null, false, { message: 'Unknown user' });
				}

				let info = { scope: '*' };
				done(null, user, info);
			});
		});
	}
));
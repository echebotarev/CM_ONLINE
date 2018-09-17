let InstagramStrategy = require('passport-instagram').Strategy;

import config          from '../../../conf';

module.exports = new InstagramStrategy({
		clientID: config.get('providers:instagram:clientId'),
		clientSecret: config.get('providers:instagram:clientSecret'),
		callbackURL: `http://${config.get('host')}:${config.get('port')}/auth/instagram/callback`,
		passReqToCallback: true
	},
	function(req, accessToken, refreshToken, profile, done) {
		console.log('PROFILE', profile);
		console.log('ACCESS TOKEN', accessToken);
		console.log('REFRESH TOKEN', refreshToken);

		// asynchronous verification, for effect...
		process.nextTick(function () {

			// To keep the example simple, the user's Instagram profile is returned to
			// represent the logged-in user.  In a typical application, you would want
			// to associate the Instagram account with a user record in your database,
			// and return that user instead.
			return done(null, profile);
		});
	}
);
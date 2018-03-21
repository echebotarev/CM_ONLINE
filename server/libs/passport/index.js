import passport from 'passport';
import User from '../../model/user';

passport.use(require('./localStrategy'));

passport.serializeUser(function(user, done) {
	done(null, user.id); // uses _id as idFieldd
});

passport.deserializeUser(function(id, done) {
	User.findById(id, done); // callback version checks id validity automatically
});

export default passport
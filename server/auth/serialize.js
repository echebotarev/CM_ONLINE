import User from './../model/user';
import passport from 'passport';

// паспорт напрямую с базой не работает
/*
passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());*/

passport.serializeUser(function(user, done) {
	done(null, user.id); // uses _id as idFieldd
});

passport.deserializeUser(function(id, done) {
	User.findById(id, done); // callback version checks id validity automatically
});
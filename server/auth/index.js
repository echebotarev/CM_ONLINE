import passport from 'passport';
const User = require('./../model/user');

require('./serialize');

passport.use(require('../libs/passport/localStrategy'));
/*passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());*/

export default passport;
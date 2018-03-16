import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
// import session from 'express-session';
import path from 'path';
import fs from 'fs';

import logger from './server/log';
const log = logger(module);

// import passport from 'passport';
// import passport from './server/auth/index';
// import oauth2 from './server/auth/oauth2';

import config from './conf';

import authenticate from './server/routes/authenticate';
import login from './server/routes/login';
import users from './server/routes/users';
import buttons from './server/routes/buttons';

const PORT = config.get('port');
const PUBLIC_PATH = config.get('public_path');
const app = express();
const router = express.Router();

if (config.get('NODE_ENV') === 'development') {
	const webpack = require('webpack');
	const webpackConfig = require('./webpack.config.babel').default;
	const compiler = webpack(webpackConfig);
	app.use(require('webpack-dev-middleware')(compiler, {
		hot: true,
		stats: {
			colors: true
		}
	}));
	app.use(require('webpack-hot-middleware')(compiler));
}
else {
	app.use(express.static(PUBLIC_PATH));
}

app.use(cookieParser());
/*app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false
}));*/


// app.use(passport.initialize());
// app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
/*app.use(methodOverride());*/

const middlewares = fs.readdirSync(path.join(__dirname, 'server', 'middlewares')).sort();
middlewares.forEach(function(middleware) {
	app.use(require('./server/middlewares/' + middleware));
});

app.use('/auth', authenticate);

app.use('/api/users', users);
app.use('/api/buttons', buttons);
// app.use('/api/oauth/token', oauth2.token);

router.all("*", function(req, res) {
	res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});


app.listen(PORT, function() {
	log.info('Listening on port ' + PORT + '...');
});
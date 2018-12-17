import express from 'express';
import path    from 'path';
import fs      from 'fs';

import logger from './server/log';
const log = logger(module);

import config          from './conf';
import mongoose        from './server/libs/mongoose';
import isAuthenticated from './server/routes/isAuthenticated'

import error       from './server/routes/error';
import users       from './server/routes/users';
import instagram       from './server/routes/instagram';
import api         from './server/routes/api';
import subdomain         from './server/routes/subdomain';
import verifyEmail from './server/routes/verifyEmail';

const PORT = config.get('port');
const PUBLIC_PATH = config.get('public_path');
const app = express();

app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'pug');

const middlewares = fs.readdirSync(path.join(__dirname, 'server', 'middlewares')).sort();
middlewares.forEach(function (middleware) {
	app.use(require('./server/middlewares/' + middleware));
});

app.use('*', subdomain);

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

app.use(isAuthenticated);

app.use('/users', users);
// app.use('/auth/instagram', instagram);
app.use('/api', api);
app.use('/verify-email', verifyEmail);
app.use('/error', error);

app.use('*', (req, res) => {
	// console.log('REQ', req);

	// res.sendFile(path.join(PUBLIC_PATH, 'index.html'))
});

app.listen(PORT, function () {
	log.info('Listening on port ' + PORT + '...');
});

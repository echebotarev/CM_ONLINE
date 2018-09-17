import express from 'express';
import path    from 'path';
import fs      from 'fs';

import logger from './server/log';

const log = logger(module);

import config          from './conf';
import mongoose        from './server/libs/mongoose';
import isAuthenticated from './server/routes/isAuthenticated'

import frontpage   from './server/routes/frontpage';
import error       from './server/routes/error';
import users       from './server/routes/users';
import instagram       from './server/routes/instagram';
import api         from './server/routes/api';
import verifyEmail from './server/routes/verifyEmail';

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

const middlewares = fs.readdirSync(path.join(__dirname, 'server', 'middlewares')).sort();
middlewares.forEach(function (middleware) {
	app.use(require('./server/middlewares/' + middleware));
});

app.use(isAuthenticated);

// app.use('/', frontpage);
app.use('/users', users);
// app.use('/auth/instagram', instagram);
app.use('/api', api);
app.use('/verify-email', verifyEmail);
app.use('/error', error);

app.use('*', (req, res) => res.sendFile(path.join(PUBLIC_PATH, 'index.html')));

/*router.get("/", function(req, res) {
	res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});*/

app.listen(PORT, function () {
	log.info('Listening on port ' + PORT + '...');
});
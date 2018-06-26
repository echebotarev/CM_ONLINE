const session = require('express-session');
const MongooseStore = require('connect-mongodb-session')(session);

import config from '../../conf/index';

const store = new MongooseStore({
	uri: config.get('mongoose:uri'),
	databaseName: 'CM_ONLINE',
	collection: 'Sessions'
});

store.on('error', err => {
	assert.ifError(error);
	assert.ok(false);
});

module.exports = session({
	secret: 'The secret key',
	cookie: {
		maxAge: 1000 * 60 * 60 * 4 // 4 hours
	},
	store: store,
	resave: false,
	saveUninitialized: true
});
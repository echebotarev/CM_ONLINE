import logger from '../log';
const log = logger(module);

import mongoose from './mongoose';
import User from '../model/user';
import Client from '../model/client';
import AccessToken from '../model/accessToken';
import RefreshToken from '../model/refreshToken';

// router.get('/', (req, res) => {
User.remove({}, function (err) {
	if (err) return log.error(err);
});

Client.remove({}, function (err) {
	if (err) return log.error(err);

});
AccessToken.remove({}, function (err) {
	if (err) return log.error(err);
});
RefreshToken.remove({}, function (err) {
	if (err) return log.error(err);
});

setTimeout(function () {
	mongoose.disconnect();
}, 3000);
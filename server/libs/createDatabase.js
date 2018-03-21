import logger from '../log';
const log = logger(module);

import mongoose from './mongoose';
import User from '../model/user';
import Client from '../model/client';

let user = new User({email: "9111721308@mail.ru", password: "simplepassword"});
user.save(function (err, user) {
	if (err) return log.error(err);
	else log.info("New user - %s:%s", user.email, user.password);
});

/*let client = new Client({name: "OurService iOS client v1", clientId: "mobileV1", clientSecret: "abc123456"});
client.save(function (err, client) {
	if (err) return log.error(err);
	else log.info("New client - %s:%s", client.clientId, client.clientSecret);
});*/

setTimeout(function () {
	mongoose.disconnect();
}, 3000);
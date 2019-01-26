import logger from "../log";
const log = logger(module);

import mongoose from "./mongoose";
import User from "../model/user";
import Letter from "../model/letter";
import Template from "../model/template";
import Button from "../model/button";

Button.remove({}, function(err) {
  if (err) return log.error(err);
});

User.remove({}, function(err) {
  if (err) return log.error(err);
});

Letter.remove({}, function(err) {
  if (err) return log.error(err);
});

Template.remove({}, function(err) {
  if (err) return log.error(err);
});

setTimeout(function() {
  mongoose.disconnect();
}, 3000);

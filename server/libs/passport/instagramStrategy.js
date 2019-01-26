let InstagramStrategy = require("passport-instagram").Strategy;

import Template from "../../model/template";

import config from "../../../conf";

import logger from "./../../log";
const log = logger(module);

module.exports = new InstagramStrategy(
  {
    clientID: config.get("providers:instagram:clientId"),
    clientSecret: config.get("providers:instagram:clientSecret"),
    callbackURL: `http://${config.get("host")}:${config.get(
      "port"
    )}/image/instagram/callback`,
    passReqToCallback: true
  },
  async function(req, accessToken, refreshToken, profile, done) {
    await Template.findByIdAndUpdate(req.session.templateID, {
      logotypePicture: profile._json.data.profile_picture
    });

    // паспорт должен всегда возвращать User'a
    return done(null, req.user);
  }
);

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
    )}/auth/instagram/callback`,
    passReqToCallback: true
  },
  function(req, accessToken, refreshToken, profile, done) {
    Template.findByIdAndUpdate(
      req.session.templateID,
      { logotypePicture: profile._json.data.profile_picture },
      function(err, template) {
        if (err) {
          log.error(err);
          return done(err);
        }

        return done(null, template);
      }
    );
  }
);

const LocalStrategy = require("passport-local").Strategy;

import User from "../../model/user";

module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true // req for more complex cases
  },
  function(req, email, password, done) {
    console.log("Local Strategy - EMAIL: ", email);

    User.findOne({ email }, function(err, user) {
      if (err) return done(err);
      if (!user || !user.checkPassword(password)) {
        return done(null, false, {
          message: "Нет такого пользователя или пароль не верен"
        });
      }
      if (!user.verifiedEmail) {
        return done(null, false, { message: "Email не подтвержден" });
      }

      return done(null, user);
    });
  }
);

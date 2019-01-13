import express from "express";
import passport from "passport";
import mongoose from "mongoose";
import User from "./../model/user";
import Template from "./../model/template";
const router = express.Router();

import logger from "./../log";
const log = logger(module);
const sendMail = require("./../libs/sendMail");

import config from "../../conf";

router.get("/", (req, res) => {
  if (!req.isAuthenticated()) {
    res.status(403).json({
      error: "AUTHENTICATE_FAIL",
      auth: false,
      username: null
    });
  } else {
    res.json({
      auth: true,
      username: req.user.username,
      id: req.user._id
    });
  }
});

router.post("/register", function(req, res) {
  let verifyEmailToken = Math.random()
    .toString(36)
    .slice(2, 10);
  let user = new User({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    verifiedEmail: false,
    verifyEmailToken: verifyEmailToken
  });

  user.save(function(err, user) {
    if (err) {
      log.error(err);
      return res.json(err);
    }

    let template = new Template({
      _id: new mongoose.Types.ObjectId(),
      user: user._id
    });
    template.save();

    sendMail({
      template: "verify-registration-email",
      to: user.email,
      subject: "Подтверждение email",
      link:
        `http://${config.get("host")}:${config.get("port")}/verify-email/` +
        verifyEmailToken
    });

    return res.json({
      auth: false,
      username: null,
      message:
        "На вашу почту отправлено письмо. Перейдите по ссылке указанной в нем."
    });
  });
});

router.post("/login", (req, res) => {
  passport.authenticate("local", function(err, user, info) {
    if (!user || err) {
      return res.status(403).json({
        error: "LOGIN_FAIL",
        auth: false,
        username: null,
        message: info ? info.message : null
      });
    }

    req.login(user, function(err) {
      if (err) return log.error(err);

      return res.json({
        auth: true,
        username: user.username,
        id: user._id
      });
    });
  })(req, res);
});

router.post("/logout", (req, res) => {
  req.logout();
  res.json({
    auth: false,
    username: null,
    message: null
  });
});

export default router;

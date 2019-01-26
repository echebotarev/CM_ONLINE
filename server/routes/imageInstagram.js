import express from "express";
import passport from "passport";
const router = express.Router(),
  env = process.env.NODE_ENV;

router
  .get("/", passport.authenticate("instagram"))
  .get(
  "/callback",
  passport.authenticate("instagram", {
    failureRedirect: env === "development" ? "/" : "/login"
  }),
  function(req, res) {
    return env === "development"
      ? res.redirect("/")
      : res.redirect("/constructor");
  }
);

export default router;

import express from "express";
const router = express.Router();
import path from "path";
import pug from "pug";

import logger from "./../log";
import config from "../../conf";
const log = logger(module);

router.get("/", (req, res) => {
  let html = pug.renderFile(
    path.join(config.get("root_path"), "server/templates/error/error.pug"),
    {}
  );

  res.send(html);
});

export default router;

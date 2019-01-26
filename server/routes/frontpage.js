import express from "express";
const router = express.Router();

import config from "./../../conf";
const PUBLIC_PATH = config.get("public_path");

import logger from "./../log";
import path from "path";
const log = logger(module);

router.get("/", (req, res) => {
  log.info("Router INDEX");
  res.sendFile(path.resolve(PUBLIC_PATH, "index.html"));
});

export default router;

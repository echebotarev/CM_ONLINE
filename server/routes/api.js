import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import _ from "lodash";

import logger from "./../log";
const log = logger(module);

import Template from "../model/template";
import Button from "../model/button";

router.get("/:target/:id", async (req, res) => {
  log.info("Router api");
  let templates, buttons;

  switch (req.params.target) {
    case "templates":
      templates = await Template.find({ user: req.params.id });
      buttons = await Promise.all(
        templates.map(async template => {
          return await Button.find({ template: template._id });
        })
      );

      res.json({
        templates,
        buttons: _.flatten(buttons)
      });
      break;
  }
});

router.post("/:target", async (req, res) => {
  let { target } = req.params,
    { id } = req.body,
    refs = target === "buttons" ? "template" : "user",
    models = {
      buttons: Button,
      templates: Template
    };

  let item = new models[target]({
    _id: new mongoose.Types.ObjectId(),
    [refs]: id ? id : req.user._id
  });

  item.save();
  res.json(item);
});

router.put("/:target/:id", async (req, res) => {
  let { target, id } = req.params,
    // TODO: checkLinkTemplate - проверка на уникальность URL
    payload = req.body,
    models = {
      buttons: Button,
      templates: Template
    };

  models[target].findByIdAndUpdate(id, payload, function(err, result) {
    if (err) {
      log.error(err);

      res.status(500).send({
        type: target,
        id
      });

      return;
    }

    res.json(result);
  });
});

router.delete("/:target", async (req, res) => {
  let target = req.params.target,
    id = req.body.id,
    models = {
      buttons: Button,
      templates: Template
    };

  await models[target].remove({ _id: id });
  if (target === "templates") await Button.remove({ template: id });

  res.json({ id });
});

export default router;

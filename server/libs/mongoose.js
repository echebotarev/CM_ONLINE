import mongoose from "mongoose";
import beautifyUnique from "mongoose-beautiful-unique-validation";
import config from "../../conf/index";

import logger from "../log";
const log = logger(module);

mongoose.connect(config.get("mongoose:uri"));

// вместо MongoError будет выдавать ValidationError (проще ловить и выводить)
mongoose.plugin(beautifyUnique);

const db = mongoose.connection;

if (config.get("NODE_ENV") === "development") {
  mongoose.set("debug", true);
}

db.on("error", function(err) {
  log.error("Connection error:", err.message);
});

db.once("open", function callback() {
  log.info("Connected to DB!");
});

export default mongoose;

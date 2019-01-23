import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Button = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: String,
  text: {
    default: "Новая кнопка",
    type: String
  },
  link: String,
  style: {
    backgroundColor: {
      default: "rgb(7, 97, 219)",
      type: String
    },
    backgroundOpacity: {
      default: 1,
      type: Number
    },
    textColor: {
      default: "rgb(255, 255, 255)",
      type: String
    },
    textOpacity: {
      default: 1,
      type: Number
    },
    padding: String,
    fontSize: String,
    textAlign: {
      default: "center",
      type: String
    },
    boxShadow: String,
    borderColor: {
      default: "rgb(0, 0, 0)",
      type: String
    },
    borderWidth: {
      default: 0,
      type: Number
    },
    borderOpacity: {
      default: 1,
      type: Number
    },
    borderRadius: String
  },
  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Template"
  },
  templatesButton: String
});

module.exports = mongoose.model("Button", Button);

import mongoose from "mongoose";
import crypto from "crypto";

const Schema = mongoose.Schema;
const User = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    default: "Noname",
    type: String
  },

  email: {
    type: String,
    unique: true,
    required: "E-mail пользователя не должен быть пустым.",
    validate: [
      {
        validator: function checkEmail(value) {
          return this.deleted
            ? true
            : /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
        },
        msg: "Укажите, пожалуйста, корректный email."
      }
    ],
    lowercase: true,
    trim: true
  },

  providers: [
    {
      name: String,
      nameId: {
        type: String,
        index: true
      },
      profile: {}
    }
  ],

  deleted: Boolean,
  hashedPassword: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },

  verifyEmailToken: String,
  pendingVerifyEmail: String,
  verifyEmailRedirect: String,
  verifiedEmailsHistory: [{ date: Date, email: String }],
  verifiedEmail: Boolean
});

User.methods.encryptPassword = function(password) {
  return crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

User.virtual("userId").get(function() {
  return this.id;
});

User.virtual("password")
  .set(function(password) {
    this._plainPassword = password;
    this.salt = crypto.randomBytes(128).toString("hex");
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() {
    return this._plainPassword;
  });

User.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};

module.exports = mongoose.model("User", User);

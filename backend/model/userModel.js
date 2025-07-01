const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = new mongoose.Schema();
const validator = require("validator");
const userSchema = Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified(password)) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    console.error("error hashing password");
    next(error);
  }
});

const user = mongoose.model("user", userSchema);
module.exports = user;

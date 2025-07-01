const mongoose = require("mongoose");
const validator = require("validator");

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      validate: [
        {
          validator: function (value) {
            return validator.isLength(value, { min: 1, max: 100 });
          },
          message: "Name must be between 1 and 100 characters",
        },
        {
          validator: function (value) {
            return /^[A-Za-z\s.,!?'-]*$/.test(value);
          },
          message:
            "Name can only contain letters, spaces, and common punctuation",
        },
      ],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      validate: {
        validator: function (value) {
          return validator.isEmail(value);
        },
        message: "Please provide a valid email address",
      },
    },
    phone: {
      type: String,
      required: false,
      trim: true,
      validate: {
        validator: function (value) {
          return (
            !value ||
            validator.isMobilePhone(value, "any", { strictMode: false })
          );
        },
        message: "Please provide a valid phone number",
      },
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      validate: [
        {
          validator: function (value) {
            return validator.isLength(value, { min: 1, max: 1000 });
          },
          message: "Message must be between 1 and 1000 characters",
        },
        {
          validator: function (value) {
            return /^[A-Za-z\s.,!?'-]*$/.test(value);
          },
          message:
            "Message can only contain letters, spaces, and common punctuation",
        },
      ],
    },
    interest: {
      type: [String],
      required: [true, "At least one interest is required"],
      default: [],
      validate: {
        validator: function (value) {
          return (
            value.length > 0 &&
            value.every((item) => validator.isLength(item, { min: 1, max: 50 }))
          );
        },
        message: "Each interest must be between 1 and 50 characters",
      },
    },
    country: {
      type: String,
      required: false,
      trim: true,
      validate: {
        validator: function (value) {
          return validator.isLength(value, { min: 1, max: 100 });
        },
        message: "Country must be between 1 and 100 characters",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);

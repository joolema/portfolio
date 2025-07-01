const mongoose = require("mongoose");
const validator = require("validator");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      validate: [
        {
          validator: function (value) {
            return validator.isLength(value, { min: 1, max: 100 });
          },
          message: "Title must be between 1 and 100 characters",
        },
        {
          validator: function (value) {
            return /^[A-Za-z\s.,!?'-]*$/.test(value);
          },
          message:
            "Title can only contain letters, spaces, and common punctuation",
        },
      ],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      validate: [
        {
          validator: function (value) {
            return validator.isLength(value, { min: 1, max: 1000 });
          },
          message: "Description must be between 1 and 1000 characters",
        },
        {
          validator: function (value) {
            return /^[A-Za-z\s.,!?'-]*$/.test(value);
          },
          message:
            "Description can only contain letters, spaces, and common punctuation",
        },
      ],
    },
    category: {
      type: [String],
      required: [true, "At least one category is required"],
      default: ["design"],
      validate: {
        validator: function (value) {
          return (
            value.length > 0 &&
            value.every((category) =>
              validator.isLength(category, { min: 1, max: 50 })
            )
          );
        },
        message: "Each category must be between 1 and 50 characters",
      },
    },
    image: {
      type: String,
      required: false,
      trim: true,
      validate: {
        validator: function (value) {
          return !value || validator.isURL(value);
        },
        message: "Image must be a valid URL",
      },
    },
    visible: {
      type: Boolean,
      required: true,
      default: true,
      enum: [true, false],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);

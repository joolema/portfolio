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
          validator: (value) => validator.isLength(value, { min: 1, max: 100 }),
          message: "Title must be between 1 and 100 characters",
        },
        {
          validator: (value) => /^[A-Za-z0-9\s.,!?'"()-]*$/.test(value),
          message:
            "Title can only contain letters, numbers, spaces, and common punctuation",
        },
      ],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      validate: [
        {
          validator: (value) =>
            validator.isLength(value, { min: 1, max: 1000 }),
          message: "Description must be between 1 and 1000 characters",
        },
        {
          validator: (value) => /^[A-Za-z0-9\s.,!?'"()-]*$/.test(value),
          message:
            "Description can only contain letters, numbers, spaces, and common punctuation",
        },
      ],
    },
    category: {
      type: [String],
      required: [true, "At least one category is required"],
      default: ["design"],
      validate: [
        {
          validator: (arr) =>
            Array.isArray(arr) &&
            arr.length > 0 &&
            arr.every((val) => validator.isLength(val, { min: 1, max: 50 })),
          message: "Each category must be 1 to 50 characters long",
        },
        {
          validator: (arr) =>
            arr.every((val) => /^[A-Za-z0-9\s.,!?'"()-]*$/.test(val)),
          message: "Each category must be alphanumeric and clean",
        },
      ],
    },
    images: [
      {
        image: {
          type: String,
          required: true,
          validate: {
            validator: (value) => validator.isURL(value),
            message: "Image must be a valid URL",
          },
        },
        cloudinaryId: {
          type: String,
          required: true,
          validate: {
            validator: (value) => /^[a-z]+\/[a-z0-9]+$/.test(value),
          },
        },
      },
    ],
  },
  { timestamps: true }
);
//todo:project only takes one image and one category fix it to match this update
module.exports = mongoose.model("Project", projectSchema);

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
      type: String,
      required: [true, "category is required"],
      default: "design",
      validate: [
        {
          validator: (value) => validator.isLength(value, { min: 1, max: 50 }),
          message: "category must be 1 to 50 characters long",
        },
        {
          validator: (val) => /^[A-Za-z0-9\s.,!?'"()/-]*$/.test(val),
          message: "category must be alphanumeric and clean",
        },
      ],
    },
    image: {
      url: {
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
          validator: (value) => value.length > 0 && !value.includes(" "),
          message: "Cloudinary ID cannot be empty or contain spaces",
        },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);

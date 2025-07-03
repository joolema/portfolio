const Project = require("../model/projectModel");
const upload = require("../config/multer");
const cloudinary = require("../config/cloudinary");
const fs = require("fs").promises; // For file cleanup
// @desc    Create a new project
// @route   POST /api/projects
// @access  Private (you might want to add authentication middleware)
const createProject = async (req, res) => {
  try {
    let image, cloudinaryId;
    console.log(req.file);
    console.log(req.body);
    const { title, description, category } = req.body;
    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "fill all fields",
        error: "missing fields",
      });
    }
    // Handle image upload
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "Project must have at least one image",
      });
    }

    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      image = result.secure_url;
      cloudinaryId = result.public_id;
    } catch (uploadError) {
      console.error("Cloudinary upload failed:", uploadError.message);
      await fs
        .unlink(req.file.path)
        .catch((err) =>
          console.error("Failed to delete temp file:", err.message)
        );
      return res.status(400).json({
        success: false,
        error: "Image upload failed. Please try again.",
      });
    }

    // Clean up temporary file after successful upload
    await fs
      .unlink(req.file.path)
      .catch((err) =>
        console.error("Failed to delete temp file:", err.message)
      );

    // Create the project (rely on Mongoose validators)
    const project = await Project.create({
      title: title,
      description: description,
      category: category,
      image,
      cloudinaryId,
    });

    res.status(201).json({
      success: true,
      message: "project created successfully",
      data: project,
    });
  } catch (error) {
    console.error("Server error:", error.message);
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    }
    res.status(500).json({
      success: false,
      message: "Server Error. Please try again later.",
      error: error.message,
    });
  }
};

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error: " + error.message,
    });
  }
};

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        error: "Invalid project ID",
      });
    }
    res.status(500).json({
      success: false,
      error: "Server Error: " + error.message,
    });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private (you might want to add authentication middleware)
const updateProject = async (req, res) => {
  try {
    // Check if the project exists
    let project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    // Update the project
    project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        error: "Invalid project ID",
      });
    } else if (error.name === "ValidationError") {
      // Handle validation errors
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    }
    res.status(500).json({
      success: false,
      error: "Server Error: " + error.message,
    });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private (you might want to add authentication middleware)
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    await project.remove();

    res.status(200).json({
      success: true,
      data: {},
      message: "Project deleted successfully",
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        error: "Invalid project ID",
      });
    }
    res.status(500).json({
      success: false,
      error: "Server Error: " + error.message,
    });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  createProject,
};

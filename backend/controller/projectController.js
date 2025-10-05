const Project = require("../model/projectModel");
const upload = require("../config/multer");
const cloudinary = require("../config/cloudinary");
const fs = require("fs").promises; // For file cleanup
// @desc    Create a new project
// @route   POST /api/projects
// @access  Private (you might want to add authentication middleware)
const createProject = async (req, res) => {
  let uploadedImage = {};

  try {
    const { title, description, category } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "fill all fields",
        error: "missing fields",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "Project must have at least one image",
      });
    }

    // File size validation
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    if (req.file.size > MAX_FILE_SIZE) {
      await fs.unlink(req.file.path);
      return res.status(400).json({
        success: false,
        error: "File too large. Maximum size is 10MB.",
      });
    }

    // Handle image upload with timeout
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "projects",
        timeout: 60000,
        resource_type: "auto",
      });

      if (!result || !result.secure_url) {
        throw new Error("Cloudinary upload returned invalid response");
      }

      uploadedImage = {
        url: result.secure_url,
        cloudinaryId: result.public_id,
      };
    } catch (uploadError) {
      console.error("Cloudinary upload failed:", uploadError);
      await fs.unlink(req.file.path);

      let errorMessage = "Image upload failed. Please try again.";
      if (
        uploadError.http_code === 499 ||
        uploadError.name === "TimeoutError"
      ) {
        errorMessage =
          "Image upload timed out. Try a smaller file or check your connection.";
      }

      return res.status(400).json({
        success: false,
        error: errorMessage,
      });
    }

    // Clean up temporary file
    await fs.unlink(req.file.path);

    const data = {
      title: title,
      description: description,
      category: category,
      image: uploadedImage,
    };

    const project = await Project.create(data);

    res.status(201).json({
      success: true,
      message: "project created successfully",
      data: project,
    });
  } catch (error) {
    console.error("Server error:", error.message);

    // Clean up uploaded image if project creation fails
    if (uploadedImage.cloudinaryId) {
      await cloudinary.uploader
        .destroy(uploadedImage.cloudinaryId)
        .catch((err) =>
          console.error("Failed to delete Cloudinary image:", err)
        );
    }

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
    const projects = await Project.find();
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
    const { id } = req.params;
    let { title, description, category } = req.body;

    // Check if the project exists
    let project = await Project.findById(id);
    let image = project.image;
    if (!title) {
      title = project.title;
    }
    if (!description) {
      description = project.description;
    }
    if (!category) {
      category = project.category;
    }
    //console.log("project", project);
    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }
    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path);
        image = {
          url: result.secure_url,
          cloudinaryId: result.public_id,
        };

        const delResult = await cloudinary.uploader.destroy(
          project.image.cloudinaryId
        );

        await fs
          .unlink(req.file.path)
          .catch((err) =>
            console.error("failed to delete temp file", err.message)
          );
      } catch (uploadError) {
        console.error("Cloudinary upload failed:", uploadError);
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
    }
    const data = {
      title: title,
      description: description,
      category: category,
      image: image,
    };
    // Update the project
    project = await Project.findByIdAndUpdate(id, data, {
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
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "there is no project with",
        error: "document not found!",
      });
    }
    if (project.image && project.image.cloudinaryId) {
      try {
        const result = await cloudinary.uploader.destroy(
          project.image.cloudinaryId
        );
        console.log("image deleted successfully");
      } catch (error) {
        console.log("failed to delete image from cloudinary", error.message);
      }
    }

    await project.deleteOne();

    res.status(200).json({
      success: true,
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

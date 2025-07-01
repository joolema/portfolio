const express = require("express");
const {
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  createProject,
} = require("../controller/projectController");

const router = express.Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;

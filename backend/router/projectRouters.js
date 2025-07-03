const express = require("express");
const upload = require("../config/multer");
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
router.post("/", upload.single("image"), createProject);
router.patch("/:id", upload.single("image"), updateProject);
router.delete("/:id", deleteProject);

module.exports = router;

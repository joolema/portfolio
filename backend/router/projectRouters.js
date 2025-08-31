const express = require("express");
const auth = require("../middlewares/auth");
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
router.post("/", auth, upload.array("images", 10), createProject);
router.patch("/:id", auth, upload.single("images"), updateProject);
router.delete("/:id", auth, deleteProject);

module.exports = router;

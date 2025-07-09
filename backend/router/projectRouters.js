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
router.post("/", auth, upload.single("image"), createProject);
router.patch("/:id", auth, upload.single("image"), updateProject);
router.delete("/:id", auth, deleteProject);

module.exports = router;

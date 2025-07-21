const express = require("express");
const router = express.Router();
const {
  Signup,
  login,
  changePassword,
  resetPassword,
  resetPasswordConfirm,
  getUsers,
  getUser,
  verifyToken,
} = require("../controller/userController");
const auth = require("../middlewares/auth");

// Public routes
router.post("/signup", Signup);
router.post("/login", login);
router.post("/reset-password", resetPassword);
router.get("/reset-password/:token", resetPasswordConfirm);

// Protected route
router.post("/change-password", auth, changePassword);

//get
router.get("/", getUsers);
router.get("/:id", getUser);
router.get("/verify/:token", verifyToken);
module.exports = router;

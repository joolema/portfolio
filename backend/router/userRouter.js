const express = require("express");
const router = express.Router();
const {
  Signup,
  login,
  changePassword,
  resetPassword,
  resetPasswordConfirm,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Public routes
router.post("/signup", Signup);
router.post("/login", login);
router.post("/reset-password", resetPassword);
router.post("/reset-password/:token", resetPasswordConfirm);

// Protected route
router.post("/change-password", authMiddleware, changePassword);

module.exports = router;

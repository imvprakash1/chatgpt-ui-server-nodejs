import express from "express";
const router = express.Router();
import {
  createUser,
  verifyUserLogin,
  verifyEmail,
  resendVerificationEmail,
} from "../controllers/accountUtils.js";

// Registration route
router.post("/register", createUser);

// Email verification route
router.get("/verify-email", verifyEmail);

// Resend verification email
router.get("/resend-email", resendVerificationEmail);

//Login route
router.post("/login", verifyUserLogin);

export default router;

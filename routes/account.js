import express from "express";
// import Users from "../models/User.js";
import User from "../models/userModel.js";
const router = express.Router();

// Controller functions

async function createUser(req, res) {
  try {
    // Create new user
    const user = new User({
      ...req.body,
    });
    await user.save();
    //   await Users.add(user);
    // Send verification email
    return res.status(201).json(user);
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
}

async function verifyEmail(req, res) {
  // Confirm email verification
  res.json({ verified: true });
}

async function resendVerificationEmail(req, res) {
  // Resend verification email
  res.json({ resent: true });
}

// Registration route
router.post("/register", createUser);

// Email verification route
router.get("/verify-email", verifyEmail);

// Resend verification email
router.post("/resend-email", resendVerificationEmail);

// Stub route for email link
router.get("/confirm-email/:key", (req, res) => {
  // Process email confirmation
  res.sendStatus(200);
});

export default router;

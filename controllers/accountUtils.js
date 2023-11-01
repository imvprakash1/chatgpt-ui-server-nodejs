import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import sendEMail from "./sendEmail.js";

async function createUser(req, res) {
  try {
    // Create new user
    const user = new User({
      ...req.body,
    });
    //Encrypting the Password
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    //Send email verification to user
    sendEMail({
      to: user.email,
      subject: "Please verify your account",
      text: `http://localhost:3000/account/verify-email?email=${user.email}`,
    });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
}

//Login user post verification
async function verifyUserLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    const isLoginSuccessful = await user.loginUser();
    if (isLoginSuccessful) {
      return res.status(200).json({ success: true });
    } else {
      throw new Error("Please verify your credentials");
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

//Verify the User email
async function verifyEmail(req, res) {
  try {
    // Confirm email verification
    const email = req.query.email;
    const user = new User({ email });
    await user.verifyEmail();
    return res.json({ verified: true });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function resendVerificationEmail(req, res) {
  try {
    // Confirm email verification
    const email = req.query.email;
    const user = new User({ email });
    await user.verifyEmail();
    return res.json({ verified: true });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export { createUser, verifyUserLogin, verifyEmail, resendVerificationEmail };

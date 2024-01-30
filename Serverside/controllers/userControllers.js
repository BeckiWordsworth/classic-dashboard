const asyncHandler = require("express-async-handler");
// const Contact = require("../models/contactModel");

//@desc Register a user
//@desc POST /api/cusers/register
//@desc @access public

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@desc Login a user
//@desc POST /api/cusers/login
//@desc @access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//@desc Current user info
//@desc POST /api/cusers/current
//@desc @access private

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };

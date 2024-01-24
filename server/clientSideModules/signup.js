const express = require('express');
const router = express.Router();

const User = require('../models/userSchema');

// User Registration
router.post('/signup', async (req, res) => {
  const { name, phone, email, password, cPassword } = req.body;

  if (!name || !phone || !email || !password || !cPassword) {
    return res.status(422).json({ error: "Please fill out all the fields properly" });
  }

  try {
    // Check if the user already exists
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(409).json({ error: "User with this email already exists" });
    }

    // Check if passwords match
    if (password !== cPassword) {
      return res.status(422).json({ error: "Passwords do not match" });
    }

    // Create a new user
    const user = new User({ name, phone, email, password, cPassword });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

const User = require('../models/userSchema');

// User signin route
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const userSignin = await User.findOne({ email: email });

    if (userSignin && userSignin.password === password) {
      // You may want to generate a token or session here if needed

      res.json({ message: "User signed in successfully" });
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

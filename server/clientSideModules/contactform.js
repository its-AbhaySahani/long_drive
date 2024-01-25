const express = require('express');
const router = express.Router();

const User = require('../models/userSchema');

// User contact route
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.json({ error: "Please fill the form" });
    }

    // Assuming you have a different method for identifying the user (e.g., session)
    // Modify this based on how you manage user sessions or authentication

    // For example, you might have a session ID stored in req.session.userId
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const userContact = await User.findOne({ _id: userId });

    if (userContact) {
      const userMessage = await userContact.addMessage(name, email, phone, message);
      
      await userContact.save();

      res.status(201).json({ message: "User contact successful" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

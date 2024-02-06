const express = require('express');
const router = express.Router();

// Getting user complete data
router.get('/getdata', (req, res) => {
  // Assuming you have some session or user data available in req.session or req.user
  const userData = req.user;

  // Check if user data exists
  if (!userData) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.json(userData);
});

module.exports = router;

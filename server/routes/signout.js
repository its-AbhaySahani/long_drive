const express = require('express');
const router = express.Router();

// Sign Out implementation
router.get('/signout', (req, res) => {
  console.log('User log out');

  // Clear any user-related session data or cookies
  // This depends on your authentication approach (e.g., sessions, tokens, etc.)
  // For simplicity, we're just clearing cookies in this example

  res.clearCookie('userSessionCookie', { path: '/' });

  res.status(200).send("User Logout");
});

module.exports = router;

const router = require("express").Router();
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
    try {
        const { username, name, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ username, name, email, password });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Registration failed" });
    }
});

// Login with username
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user || user.password !== password) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Login failed" });
    }
});



module.exports = router;

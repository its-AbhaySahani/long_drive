const router = require("express").Router();
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
    console.log()
    try {
        const newUser = new User({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Registration failed" });
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            res.status(400).json({ message: "Invalid email or password" });
        } else {
            if (user.password !== req.body.password) {
                res.status(400).json({ message: "Invalid email or password" });
            } else {
                const { password, ...others } = user._doc;
                res.status(200).json(others);
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Login failed" });
    }
});

// Get user by user_id
router.get("auth/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            const { password, ...others } = user._doc;
            res.status(200).json(others);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch user" });
    }
});

module.exports = router;

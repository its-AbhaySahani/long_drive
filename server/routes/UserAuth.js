const router = require("express").Router();
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        user_id: req.body.user_id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profile_pic: req.body.profile_pic,
    });

    try {
        const usercount = await User.count();
        newUser.user_id = 'U00' + (parseInt(usercount) + 1);
        
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            res.status(400).json("Wrong credentials");
        } else {
            if (user.password !== req.body.password) {
                res.status(400).json("Wrong credentials");
            } else {
                const { password, ...others } = user._doc;
                res.status(200).json(others);
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Get user by user_id
router.get("/:user_id", async (req, res) => {
    try {
        const user = await User.findOne({ user_id: req.params.user_id });
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;

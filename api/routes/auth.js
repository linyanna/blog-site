const router = require("express").Router();
const User = require("../models/User");

// REGISTER
// Express methods are same name as HTTP ones
router.post("/register", async (req, res) => {
    try{
        const newUser = new User({ // could just say req.body here but would accept everything
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        const user = await newUser.save();
        res.status(200).json(user); //200 response = OK, json argument can accept "success" string or user object directly
    }catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
// Express methods are same name as HTTP ones
router.post("/register", async (req, res) => {
    try{

        const salt = await bcrypt.genSalt(10); // adding random data to pass before hash
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({ // could just say req.body here but would accept everything
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user); //200 response = OK, json argument can accept "success" string or user object directly
    } catch(err) {
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async(req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("Wrong credentials!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong credentials!");
        
        const {password, ...others} = user._doc; // don't want password to be returned
        res.status(200).json(others);

    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;
const express = require("express");
const User = require("../modules/user");
const bcryptjs = require('bcryptjs');
const authRouter = express.Router();

// authRouter.get('/user', (req, res) => {
//     res.json({msg: "Mire"})
// });


// SIGN UP
authRouter.post('/api/singup', async (req, res) => {
// get the data from the client
// post that data in DB
// return that data to the user
    try {
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({msg: "User with same email already exists!"})
        }

        const hashedPassword = await bcryptjs.hash(password, 8)

        let user = new User({
            email,
            password: hashedPassword,
            name,
        })

        user = await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({error: e.message});
    }

})

module.exports = authRouter;
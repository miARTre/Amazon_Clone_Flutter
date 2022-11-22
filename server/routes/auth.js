const express = require("express");

const authRouter = express.Router();

// authRouter.get('/user', (req, res) => {
//     res.json({msg: "Mire"})
// });

authRouter.post('/api/singup', (req, res) => {
    // get the data from the client
    // post that data in DB
    // return that data to the user

    const {name, email, password} = req.body;



})

module.exports = authRouter;
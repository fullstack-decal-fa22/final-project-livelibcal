const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth")
const router = express.Router();

router.post("/signup", async (req, res) => {
    const {username, email, password} = req.body; // get the info of the user account
    try { // check if the user is already inside the data base
        let user = await User.findOne({email}) // findOne access mongoDB, accessing User schema we defined, and then check if has this email
        if (user) {
            return res.status(400).json({
                msg: "User already exist.",
            }); //Client has something wrong, already has a account
        }
        user = new User({
            username,
            email,
            password
        })
        const salt = await bcrypt.genSalt(10); // generate a random number and insert before the password
        user.password = await bcrypt.hash(password, salt) // hash user's pass word for better security

        await user.save(); // save the instantiated user into the database

        const payload =  {
            user: {
                id : user.id,
            }
        }

        jwt.sign(payload, 
            "randomString", // secret key
            {
                expiresIn: 10000, // active duration
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ // return the token
                    token,
                })
            }
        );//create new token 


    } catch (e) {
        console.log(err.msg);
        res.status(500).send("Error in Saving"); //Catch error during the registration process
    }
}
);

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
        if (email =="" || password == "") {
            return res.status(400).json({msg: "Empty String"})
        }
        let user = await User.findOne({email});
        if (!user) return res.status(400).json({msg: "User not Exist"});

        const isMatch = await bcrypt.compare(password, user.password); // check if passwords are the same
        if (!isMatch) return res.status(400).json({msg: "Incorrect password"});

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, 
            "randomString", // secret key
            {
                expiresIn: 3600, // active duration
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ // return the token
                    token,
                })
            }
        );//create new token 

    } catch(e) {
        console.log(err.msg);
        res.status(500).send("Error in Saving"); //Catch error during the registration process
    }
})

router.get("/me", auth, async (req, res) => { // auth here is middleware which check the authenticity of the web token
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch(e) {
        res.send({message: "Error when fetching user"})
    }
})

module.exports = router;
const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { ReplSet } = require('mongodb');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

// register user 
router.post('/', async (req, res) => {
    try {
        const email = req.body.email
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const password = req.body.password
        const passwordverify = req.body.passwordverify
        const grade = req.body.grade
        const role = req.body.role

        //Validation
        if (email == "" || password == "" || firstname == "" || lastname == "" || grade == "" || passwordverify == "" || role == "") {
            return res
                .status(401)
                .json({ errorMessage: 'Please enter all required fields' });
        }
        if (password.length < 6) {
            return res
                .status(402)
                .json({ errorMessage: "Please enter a password of at least 6 charectors" });
        }
        if (password !== passwordverify) {
            return res
                .status(403)
                .json({ errorMessage: "Please enter same password twice" });
        }
        const existingUser = await User.findOne({ email });
        // console.log(existingUser);

        if (existingUser) {
            return res
                .status(404)
                .json({ errorMessage: "An account with this email already exists." });
        }

        // hash the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        //console.log(passwordHash);

        // save a new user accont to the databse
        const newUser = new User({
            email,
            firstname,
            lastname,
            passwordHash,
            grade,
            role
        });

        const savedUser = await newUser.save()
        .then(
            res.json({message: "Save Sucessed"}));

        // sing the token
        const token = jwt.sign({
            user: savedUser._id
        },
            jwtSecret);
        // console.log(token);

        // send the token in a HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true
        })
            .send();


    } catch (err) {
        console.error(err);
        res
            .status(500)
            .send();
    }
});

// log in
router.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        // validate
        if (!email || !password) {
            return res
                .status(400)
                .json({ errorMessage: 'Please enter all required fields' });
        }
        console.log('test');
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res
                .status(401)
                .json({ errorMessage: "Wrong Email or password" });
        }
        console.log('test');
        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
        if (!passwordCorrect) {
            return res
                .status(401)
                .json({ errorMessage: "Wrong email or Password" });
        }
        console.log('test');
        // sing the token
        const token = jwt.sign({
            user: existingUser._id
        },
            jwtSecret);
        // console.log(token);

        // send the token in a HTTP-only cookie
        res
            .cookie("token", token, {
                httpOnly: true
            })
            .send();



    }
    catch (err) {
        console.error(err);
        res
            .status(500)
            .send();
    }
});

// logout
router.get('/logout', (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0),
    }),
    res.json({message: "loggedout"})
        .send();
});


router.get('/loggedin', (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            res.json(false);
        }

        jwt.verify(token, process.env.JWT_SECRET);
        res.send(true);

    }
    catch (err) {
        res.json(false);
    }

})

module.exports = router;

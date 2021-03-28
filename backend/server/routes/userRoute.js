const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'cbtN[9q==G\Wh>P(E?(6t[HPvjx57DF}!d*Jd,XCaR^UfNU{)M';

// register user 
router.post('/', async (req, res) => {
    try {
        const email = req.body.email
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const password = req.body.password
        const passwordVerify = req.body.passwordVerify
        const grade = req.body.grade
        const role = req.body.role

        // Validation
        if (!email || !password || !firstname || !lastname || !grade || !passwordVerify) {
            return res.status(400).json({ errorMessage: 'Please enter all required fields' });
        }

        if (password.length < 6) {
            return res
                .status(400)
                .json({ errorMessage: "Please enter a password of at least 6 charectors" });
        }

        if (password !== passwordVerify) {
            return res
                .status(400)
                .json({ errorMessage: "Please enter same password twice" });
        }

        const existingUser = await User.findOne({ email });
        // console.log(existingUser);

        if (existingUser) {
            return res
                .status(400)
                .json({ errorMessage: "An account with this email already exists." });
        }

        // hash the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        //console.log(passwordHash);

        // save a new user accont to the databse
        const newUser = new User({
            email, firstname, lastname, passwordHash, grade, role
        });

        const savedUser = await newUser.save();

        // sing the token
        const token = jwt.sign({
            user: savedUser._id
        },
            JWT_SECRET);
        // console.log(token);

        // send the token in a HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true
        })
            .send();


    } catch (err) {
        console.error(err);
        res.status(500).send();
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

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res
                .status(401)
                .json({ errorMessage: "Wrong Email or password" });
        }

        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
        if (!passwordCorrect) {
            return res
                .status(401)
                .json({ errorMessage: "Wrong email or Password" });
        }

        // sing the token
        const token = jwt.sign({
            user: existingUser._id
        },
            JWT_SECRET);
        // console.log(token);

        // send the token in a HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true
        })
            .send();



    }
    catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

// logout
router.get('/logout', (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    .send();
});

module.exports = router;




















// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// require('../models/user');
// const User = mongoose.model('user');
// const bcrypt = require('bcrypt');
// const config = require('config');
// const jwt = require('jsonwebtoken');
// const userRouter = express.Router();
// userRouter.use(bodyParser.json());

// userRouter.route('/register')
//     .get((req, res, next) => {
//         res.json("no get")
//     })
//     .post((req, res, next) => {
//         const email = req.body.email
//         const firstname = req.body.firstname
//         const lastname = req.body.lastname
//         const password = req.body.password
//         const grade = req.body.grade
//         const roles = req.body.roles
//         if (!email || !password || !firstname || !lastname || !grade) {
//             return res.status(400).json({ msg: 'Please enter all fields' });
//     }})
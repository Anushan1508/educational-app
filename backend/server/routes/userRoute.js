const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
    try {
    // const {firstname, lastname, email, grade, role, password, passwordVerify } = req.body;
    //console.log(email);
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

    if (password.length< 6){
        return res 
        .status(400)
        .json({ errorMessage: "Please enter a password of at least 6 charectors"});
    }

    if (password !== passwordVerify){
        return res 
        .status(400)
        .json({ errorMessage: "Please enter same password twice"});
    }

    const existingUser = await User.findOne({email});
    // console.log(existingUser);

    if (existingUser){
        return res 
        .status(400)
        .json({ errorMessage: "An account with this email already exists."});
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

    } catch (err) {
        console.error(err);
        res.status(500).send();
}});

module.exports =router;




















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
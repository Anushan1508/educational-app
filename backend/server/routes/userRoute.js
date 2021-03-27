const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('../models/user');
const User = mongoose.model('user');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.route('/register')
    .get((req, res, next) => {
        res.json("no get")
    })
    .post((req, res, next) => {
        const email = req.body.email
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const password = req.body.password
        const grade = req.body.grade
        const roles = req.body.roles
        if (!email || !password || !firstname || !lastname || !grade) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }
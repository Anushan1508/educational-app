const auth = require('../middleware/auth');

const router = require('express').Router();
require('dotenv').config();

router.get('/', auth, (req, res) => {
});
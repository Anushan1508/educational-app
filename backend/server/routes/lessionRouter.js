const router = require('express').Router();
const Lesson = require('../models/lession');

router.post('/', async (req, res) => {
    try {
        const name = req.body.name
        const grade = req.body.grade
        //const teacherid = req.user.id

        const newLession = new Lesson ({
            name,
            grade
            //,teacherid
        });

        const savedLession =await newLession.save();

        res.json(savedLession);
    }
    catch(err) {
        console.error(err);
        res
        .status(500)
        .send();
    }
})

module.exports = router;

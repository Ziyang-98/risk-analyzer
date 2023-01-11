const router = require('express').Router();
let Answer = require('../models/answer.model');
let Error = err => res.status(400).json('Error: ' + err);

router.route('/').get((req, res) => {
    Answer.find()
        .then(answers => res.json(answers))
        .catch(Error);
});

router.route('/add').post((req, res) => {
    const value = Number(req.body.value);

    const newAnswer = new Answer({value});

    newAnswer.save()
        .then(() => res.json('Answer added!'))
        .catch(Error);
});

router.route('/:id').get((req, res) => {
    Answer.findById(req.params.id)
        .then(answer => res.json(answer))
        .catch(Error)
});

router.route('/:id').delete((req, res) => {
    Answer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Answer deleted'))
        .catch(Error)
});

router.route('/update/:id').post((req, res) => {
    Answer.findById(req.params.id)
        .then(answer => {
            answer.value = Number(req.body.value);

            answer.save()
                .then(() => res.json('Answer updated!'))
                .catch(Error);
        })
        .catch(Error)
});

module.exports = router;
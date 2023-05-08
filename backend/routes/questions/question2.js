const router = require('express').Router();
let Q2 = require('../../models/questions/question2.model');

router.route('/').get((req, res) => {
    Q2.find()
        .then(answers => res.json(answers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const value = Number(req.body.value);

    const newAnswer = new Q2({value});

    newAnswer.save()
        .then(() => res.json('Answer to question 2 added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:qid').get((req, res) => {
    Q2.findById(req.params.qid)
        .then(answer => res.json(answer))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:qid').delete((req, res) => {
    Q2.findByIdAndDelete(req.params.qid)
        .then(() => res.json('Answer to question 2 deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:qid').post((req, res) => {
    Q2.findById(req.params.qid)
        .then(answer => {
            answer.value = Number(req.body.value);

            answer.save()
                .then(() => res.json('Answer to question 2 updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
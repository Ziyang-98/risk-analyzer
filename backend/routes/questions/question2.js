const router = require('express').Router();
let Q2 = require('../../models/questions/question2.model');
let Error = err => res.status(400).json('Error: ' + err);

router.route('/').get((req, res) => {
    Q2.find()
        .then(answers => res.json(answers))
        .catch(Error);
});

router.route('/add').post((req, res) => {
    const value = Number(req.body.value);

    const newAnswer = new Q2({value});

    newAnswer.save()
        .then(() => res.json('Answer to question 2 added!'))
        .catch(Error);
});

router.route('/:qid').get((req, res) => {
    Q2.findById(req.params.qid)
        .then(answer => res.json(answer))
        .catch(Error)
});

router.route('/:qid').delete((req, res) => {
    Q2.findByIdAndDelete(req.params.qid)
        .then(() => res.json('Answer to question 2 deleted!'))
        .catch(Error)
});

router.route('/update/:qid').post((req, res) => {
    Q2.findById(req.params.qid)
        .then(answer => {
            answer.value = Number(req.body.value);

            answer.save()
                .then(() => res.json('Answer to question 2 updated!'))
                .catch(Error);
        })
        .catch(Error)
});

module.exports = router;
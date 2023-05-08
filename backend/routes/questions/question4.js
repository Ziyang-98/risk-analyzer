const router = require('express').Router();
let Q4 = require('../../models/questions/question4.model');

router.route('/').get((req, res) => {
    Q4.find()
        .then(answers => res.json(answers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const p1 = Number(req.body.p1);
    const p2 = Number(req.body.p2);
    const p3 = Number(req.body.p3);

    const newAnswer = new Q4({p1, p2, p3});

    newAnswer.save()
        .then(() => res.json('Answer to question 4 added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:qid').get((req, res) => {
    Q4.findById(req.params.qid)
        .then(answer => res.json(answer))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:qid').delete((req, res) => {
    Q4.findByIdAndDelete(req.params.qid)
        .then(() => res.json('Answer to question 5 deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:qid').post((req, res) => {
    Q4.findById(req.params.qid)
        .then(answer => {
            answer.p1 = Number(req.body.p1);
            answer.p2 = Number(req.body.p2);
            answer.p3 = Number(req.body.p3);
            
            answer.save()
                .then(() => res.json('Answer to question 5 updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
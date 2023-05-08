const router = require('express').Router();
let Q1 = require('../../models/questions/question1.model');

router.route('/').get((req, res) => {
    Q1.find()
        .then(answers => res.json(answers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const p1 = Number(req.body.p1);
    const p2 = Number(req.body.p2);
    const p3 = Number(req.body.p3);
    const p4 = Number(req.body.p4);
    const p5 = Number(req.body.p5);
    const avg = (p1 + p2 + p3 + p4 + p5) / 5.0;

    const newAnswer = new Q1({p1, p2, p3, p4, p5, avg});

    newAnswer.save()
        .then(() => res.json('Answer to question 1 added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:qid').get((req, res) => {
    Q1.findById(req.params.qid)
        .then(answer => res.json(answer))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:qid').delete((req, res) => {
    Q1.findByIdAndDelete(req.params.qid)
        .then(() => res.json('Answer to question 1 deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:qid').post((req, res) => {
    Q1.findById(req.params.qid)
        .then(answer => {
            answer.p1 = Number(req.body.p1);
            answer.p2 = Number(req.body.p2);
            answer.p3 = Number(req.body.p3);
            answer.p4 = Number(req.body.p4);
            answer.p5 = Number(req.body.p5);
            answer.avg = answer.p1 + answer.p2 + answer.p3 + answer.p4 + answer.p5 /5 ;

            answer.save()
                .then(() => res.json('Answer to question 1 updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
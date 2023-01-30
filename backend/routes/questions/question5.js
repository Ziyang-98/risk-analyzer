const router = require('express').Router();
let Q5 = require('../../models/questions/question5.model');
let Error = err => res.status(400).json('Error: ' + err);

router.route('/').get((req, res) => {
    Q5.find()
        .then(answers => res.json(answers))
        .catch(Error);
});

router.route('/add').post((req, res) => {
    const p1 = Number(req.body.p1);
    const p2 = Number(req.body.p2);
    const p3 = Number(req.body.p3);

    const newAnswer = new Q5({p1, p2, p3});

    newAnswer.save()
        .then(() => res.json('Answer to question 5 added!'))
        .catch(Error);
});

router.route('/:qid').get((req, res) => {
    Q5.findById(req.params.qid)
        .then(answer => res.json(answer))
        .catch(Error)
});

router.route('/:qid').delete((req, res) => {
    Q5.findByIdAndDelete(req.params.qid)
        .then(() => res.json('Answer to question 5 deleted!'))
        .catch(Error)
});

router.route('/update/:qid').post((req, res) => {
    Q5.findById(req.params.qid)
        .then(answer => {
            answer.p1 = Number(req.body.p1);
            answer.p2 = Number(req.body.p2);
            answer.p3 = Number(req.body.p3);
            
            answer.save()
                .then(() => res.json('Answer to question 5 updated!'))
                .catch(Error);
        })
        .catch(Error)
});

module.exports = router;
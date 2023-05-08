const router = require('express').Router();
let Q5 = require('../../models/questions/question5.model');
let Error = err => res.status(400).json('Error: ' + err);

router.route('/').get((req, res) => {
    Q5.find()
        .then(answers => res.json(answers))
        .catch(Error);
});

router.route('/add').post((req, res) => {
    const totalOpenedBoxes = Number(req.body.totalOpenedBoxes);
    const totalValueReceived = Number(req.body.totalValueReceived);
    const totalRounds = Number(req.body.totalRounds);
    const avgOpenedBoxes = totalOpenedBoxes / totalRounds;
    const avgValueReceived = totalValueReceived / totalRounds;
    
    const newAnswer = new Q5({avgOpenedBoxes, avgValueReceived});

    newAnswer.save()
        .then(() => res.json('Answer to question 5 added!'))
        .catch(Error);
});

router.route('/:qid').get((req, res) => {
    Q5.findById(req.params.id)
        .then(answer => res.json(answer))
        .catch(Error)
});

router.route('/:qid').delete((req, res) => {
    Q5.findByIdAndDelete(req.params.id)
        .then(() => res.json('Answer to question 5 deleted!'))
        .catch(Error)
});

router.route('/update/:qid').post((req, res) => {
    Q5.findById(req.params.id)
        .then(answer => {
            const totalOpenedBoxes = Number(req.body.totalOpenedBoxes);
            const totalValueReceived = Number(req.body.totalValueReceived);
            const totalRounds = Number(req.body.totalRounds);

            answer.avgOpenedBoxes = totalOpenedBoxes / totalRounds;
            answer.avgValueReceived = totalValueReceived / totalRounds;

            answer.save()
                .then(() => res.json('Answer to question 5 updated!'))
                .catch(Error);
        })
        .catch(Error)
});

module.exports = router;
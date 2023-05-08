const router = require('express').Router();
let Q5 = require('../../models/questions/question5.model');

router.route('/').get((req, res) => {
    Q5.find()
        .then(answers => res.json(answers))
        .catch(err => res.status(400).json('Error: ' + err));
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
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:qid').get((req, res) => {
    Q5.findById(req.params.id)
        .then(answer => res.json(answer))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:qid').delete((req, res) => {
    Q5.findByIdAndDelete(req.params.id)
        .then(() => res.json('Answer to question 5 deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
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
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
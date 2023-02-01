const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const ethnicity = req.body.ethnicity;
    const education = req.body.education;
    const marital = req.body.marital;
    const mental = req.body.mental;
    const contact = req.body.contact;

    const newUser = new User({age, gender, ethnicity, education, marital, mental, contact});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(Error)
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted'))
        .catch(Error)
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            const age = Number(req.body.age);
            const gender = req.body.gender;
            const ethnicity = req.body.ethnicity;
            const education = req.body.education;
            const marital = req.body.marital;
            const mental = req.body.mental;
            const contact = req.body.contact;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(Error);
        })
        .catch(Error)
});


module.exports = router;
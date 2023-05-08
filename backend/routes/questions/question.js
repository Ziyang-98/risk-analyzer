// This route performs redirecting to the correct question controllers
const router = require('express').Router();
let Qn = id => '/question' + id;

router.route('/:id').get((req, res) => {
    res.redirect(Qn(req.params.id));
});

router.route('/:id/add').post((req, res) => {
    res.redirect(307, Qn(req.params.id) + '/add');
});

router.route('/:id/:qid').get((req, res) => {
    res.redirect(Qn(req.params.id) + '/' + req.params.qid);
});

router.route('/:id/:qid').delete((req, res) => {
    res.redirect(307, Qn(req.params.id) + '/' + req.params.qid);
});

router.route(':id/:qid/update').post((req, res) => {
    res.redirect(307, Qn(req.params.id) + '/update/' + req.params.qid);
});

module.exports = router;
const router = require('express').Router();
const goalController = require('../../controllers/goalController');

// matches with route /api/goal
router.route('/')
    .post(goalController.create)
    .get(goalController.findAll);

module.exports = router;
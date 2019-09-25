const router = require('express').Router();
const goalController = require('../../controllers/goalController');

// matches with route /api/goal
router.route('/')
    .post(goalController.create)
    .get(goalController.findAll);

// matches with route /api/goal/{goal_id}
router.route('/:goal_id')
    .get(goalController.findOne)

// matches with route /api/goal/cat/{cateogry_id}
router.route('/cat/:category_id')
    .get(goalController.findInCategory)

module.exports = router;
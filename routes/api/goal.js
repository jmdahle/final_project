const router = require('express').Router();
const goalController = require('../../controllers/goalController');

// matches with route /api/goal
router.route('/')
    .post(goalController.create)
    .get(goalController.findAll);

// matches with route /api/{cateogry_id}
router.route('/:category_id')
    .get(goalController.findInCategory)

module.exports = router;
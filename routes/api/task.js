const router = require('express').Router();
const taskController = require('../../controllers/taskController');

// matches with route /api/task
router.route('/')
    .post(taskController.create)
    .get(taskController.findAll)

router.route('/:goal_id')
    .get(taskController.findInGoal)


module.exports = router;
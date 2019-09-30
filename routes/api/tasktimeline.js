const router = require('express').Router();
const taskTimelineController = require('../../controllers/taskTimelineController');

// matches with route /api/tasktimeline
router.route('/')
    .post(taskTimelineController.create)

// matches with route /api/tasktimeline/task/{task_id}
// router.route('/task/:task_id')
//     .get(taskTimelineController.getTimelineByTask)


module.exports = router;
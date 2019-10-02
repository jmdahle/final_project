const router = require('express').Router();
const taskTimelineController = require('../../controllers/taskTimelineController');

// matches with route /api/tasktimeline
router.route('/')
    .post(taskTimelineController.create)

router.route('/:timeline_id')
    .delete(taskTimelineController.delete)

// matches with route /api/tasktimeline/task/{task_id}
router.route('/task/:task_id/:usergoal_id')
    .get(taskTimelineController.getTimelineByTask)


module.exports = router;
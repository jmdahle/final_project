const router = require('express').Router();
const taskTimelineController = require('../../controllers/taskTimelineController');

// matches with route /api/tasktimeline
router.route('/')
    .post(taskTimelineController.create)


module.exports = router;
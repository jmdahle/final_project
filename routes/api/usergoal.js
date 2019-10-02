const router = require('express').Router();
const userGoalController = require('../../controllers/userGoalController');

// match with /api/usergoal
router.route('/')
    .post(userGoalController.create)

// match with /api/usergoal/goalpercent
router.route('/goalpercent/:usergoal_id/:pct')
    .put(userGoalController.updateGoalPercent)

module.exports = router;
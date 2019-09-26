const router = require('express').Router();
const userGoalController = require('../../controllers/userGoalController');

// match with /api/usergoal
router.route('/')
    .post(userGoalController.create);

// match with /api/usergoal/user/:user_id
router.route('/user/:user_id')
    .get(userGoalController.findByUser);
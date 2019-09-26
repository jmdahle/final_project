const router = require('express').Router();
const userRoutes = require('./user');
const categoryRoutes = require('./category');
const goalRoutes = require('./goal');
const taskRoutes = require('./task');
const userGoalRoutes = require('./usergoal');

//user routes
router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/goal', goalRoutes);
router.use('/task', taskRoutes);
router.use('/usergoal', userGoalRoutes);


module.exports = router;
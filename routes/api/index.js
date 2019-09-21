const router = require('express').Router();
const userRoutes = require('./user');
const categoryRoutes = require('./category');
const goalRoutes = require('./goal');

//user routes
router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/goal', goalRoutes);


module.exports = router;
const router = require('express').Router();
const userController = require('../../controllers/userController');

// matches with route /api/user
router.route('/')
    .post(userController.create);

router.route('/login')
    .post(userController.loginUser);

module.exports = router;
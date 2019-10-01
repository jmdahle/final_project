const router = require('express').Router();
const emailController = require('../../controllers/emailController');

// matches with route /api/email
router.route('/')
    .post(emailController.email);


module.exports = router;
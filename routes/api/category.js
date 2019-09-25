const router = require('express').Router();
const categoryController = require('../../controllers/categoryController');

// matches with route /api/category
router.route('/')
    .post(categoryController.create)
    .get(categoryController.findAll);

router.route('/:category_id')
    .get(categoryController.findOne);

module.exports = router;
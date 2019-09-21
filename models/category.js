const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema ({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
    categoryTagLine: {
        type: String,
        required: true,
    },
    categoryImgSrc: {
        type: String,
    },
    goals: [{
        // a reference to goal model; goal is a child of category
        // each category has 0 or more goals
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    }]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
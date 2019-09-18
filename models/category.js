const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema ({
    category_name: {
        type: String,
        required: true,
        unique: true
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
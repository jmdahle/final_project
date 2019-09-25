const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema ({
    goalName: {
        type: String,
        required: true,
        unique: true
    },
    categoryId: {
        // reference to category; goal is a child of category
        // NOT an array since goal is related to only one category
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }]
});

const Goal = mongoose.model('Goal', goalSchema);


module.exports = Goal;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    goalName: {
        type: String,
        required: true
    },
    goalTagLine: {
        type: String,
    },
    categoryId: {
        // reference to category; goal is a child of category
        // NOT an array since goal is related to only one category
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    tasks: [
        {
        type: Schema.Types.ObjectId,
        ref: "Task"
        }
    ],
    userGoals: [{
        type: Schema.Types.ObjectId,
        ref: 'UserGoal'
    }],
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;

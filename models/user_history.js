const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_historySchema = new Schema ({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    goal_id: {
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    },
    task_id: {
        type: Schema.Types.ObjectId,
        ref: 'Task'
    },
    date: {
        type: Date,
        required: true
    },
    completed_YN: {
        type: Boolean,
        required: true,
        default: false
    }
});

const User_History = mongoose.model('User_History', user_historySchema);

module.exports = User_History;
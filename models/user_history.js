const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userHistorySchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    goalId: {
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    },
    taskId: {
        type: Schema.Types.ObjectId,
        ref: 'Task'
    },
    date: {
        type: Date,
        required: true
    },
    completedYN: {
        type: Boolean,
        required: true,
        default: false
    }
});

const UserHistory = mongoose.model('UserHistory', userHistorySchema);

module.exports = UserHistory;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    taskName: {
        type: String,
        required: true
    },
    streakTarget: {
        type: Number,
        required: true
    },
    totalTarget: {
        type: Number,
        required: true
    },
    goalId: {
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    },
    taskTimelines: [{
        type: Schema.Types.ObjectId,
        ref: 'TaskTimeline'
    }]
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
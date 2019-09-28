const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskTimelineSchema = new Schema ({
    taskId: {
        type: Schema.Types.ObjectId,
        ref: 'Task'
    },
    taskDate: {
        type: Date
    },
    taskCompletedYN: {
        type: Boolean,
        default: false
    }
});

const TaskTimeline = mongoose.model('TaskTimeline', taskTimelineSchema);

module.exports = TaskTimeline;
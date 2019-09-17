const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    task_name: {
        type: String,
        required: true
    },
    weekly_target: {
        type: Number,
        required: true
    },
    total_target: {
        type: Number,
        required: true
    },
    goal_id: {
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
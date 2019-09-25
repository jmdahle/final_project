const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userGoalSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    goals: [{
        type: Schema.Types.ObjectId,
        ref='User_goal'
        // QUESTION: WILL tasks associated with this goal nest?
        // QUESTION: How will additional tasks that are USER-SPECIFIC get added?
    }]
});

const UserGoal = mongoose.model('UserGoal', userGoalSchema);

module.exports = UserGoal;
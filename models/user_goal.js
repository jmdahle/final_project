const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_goalSchema = new Schema ({
    user_id: {
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

const User_Goal = mongoose.model('User_Goal', user_goalSchema);

module.exports = User_Goal;
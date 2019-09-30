const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
const userGoalSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  goalPercent: { type: Number, default: 0 },
  goalId: {
    type: Schema.Types.ObjectId,
    ref: "Goal"
  }
=======
const userGoalSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    goalPercent: { type: Number, default: 0 },
    goalId: {
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    },
    taskTimelines: [{
        type: Schema.Types.ObjectId,
        ref: 'TaskTimeline'
    }]
>>>>>>> master
});

const UserGoal = mongoose.model("UserGoal", userGoalSchema);

module.exports = UserGoal;

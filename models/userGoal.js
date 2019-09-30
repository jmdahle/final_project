const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userGoalSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  goalPercent: { type: Number, default: 0 },
  goalId: {
    type: Schema.Types.ObjectId,
    ref: "Goal"
  },
  taskTimelines: [
    {
      type: Schema.Types.ObjectId,
      ref: "TaskTimeline"
    }
  ]
});

const UserGoal = mongoose.model("UserGoal", userGoalSchema);

module.exports = UserGoal;

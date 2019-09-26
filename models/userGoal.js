const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userGoalSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    goals: [{ 
        goal: { type: Schema.Types.ObjectId, ref: 'Goal'},
        goalPercent: { type: Number, default: 0 }, // percent complete
        tasks: [{
            task: { type: Schema.Types.ObjectId, ref: 'Task'},
            timeline: [{ // each date, track completion status
                dateTime: Date,
                completedYN: { type: Boolean, default: Boolean}
            }]
        }]
    }]
});

const UserGoal = mongoose.model('UserGoal', userGoalSchema);

module.exports = UserGoal;

/* EXAMPLE
“userGoal” {
	“tasks”: [
		{ “task” : {
			"_id": "5d8980d7caf32d3a07439fc4",
			"goalId": "5d87de1b9857042b371bc94f",
			"taskName": "Open a bank account",
			"weeklyTarget": 1,
			"totalTarget": 1,
			"__v": 0
			},
		“timeline”: [ 
			{ “status”: STARTED,
			“DateTime”: “SEP 24 ……..”},
			{“status”: COMPLETED,
			“DateTime”: “SEP 25 ……” }
			]
		},
        ]
*/
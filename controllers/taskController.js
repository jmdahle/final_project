const db = require('../models');

module.exports = {
    create: function (request, response) {
        console.log('adding task');
        console.log(request.body);
        db.Task
            .create(request.body)
            .then( dbTask => {
                let relatedGoalId = dbTask.goalId;
                return db.Goal.findOneAndUpdate({ _id: relatedGoalId }, { $push: {tasks: dbTask._id } }, { new: true });
            })
            .then( dbTask => response.json(dbTask) )
            .catch( dbError => response.status(3).json(dbError) );
    },
    findAll: function (request, response) {
        console.log('select tasks');
        db.Task
            .find({})
            .populate('goalId')
            .populate('taskTimelines')
            .then( dbTask => response.json(dbTask) )
            .catch( dbError => response.status(400).json(dbError) );
    },
    findInGoal: function(request, response) {
        console.log('select tasks for goal');
        db.Task
            .find({goalId: request.params.goal_id})
            .then( dbTask => response.json(dbTask) )
            .catch( dbError => response.status(400).json(dbError) );
    }
}
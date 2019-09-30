const db = require('../models');

module.exports = {
    create: function( request, response) {
        console.log('adding timeline entry');
        db.TaskTimeline
            .create( request.body )
            .then ( async dbTaskTimeline => {
                let relatedTaskId = dbTaskTimeline.taskId;
                let relatedUserGoalId = dbTaskTimeline.userGoalId;
                await db.Task.findOneAndUpdate ({
                    _id: relatedTaskId }, { $push: { taskTimelines: dbTaskTimeline._id } }, { new: true });

                await db.UserGoal.findOneAndUpdate ({
                    _id: relatedUserGoalId }, { $push: { taskTimelines: dbTaskTimeline._id } }, { new: true });

                return dbTaskTimeline;
            })
            .then( dbTaskTimeline => response.json(dbTaskTimeline) )
            .catch( dbError => response.status(400).json( dbError ));
    },
    getTimelineByTask: function (request, response) {
        console.log('retrieve task timelines for a task');
        db.TaskTimeline
            .find( { taskId: request.params.task_id } )
            .populate('taskId')
            .then( dbTaskTimeline => {
                response.json(dbTaskTimeline)
            })
            .catch( dbError => {
                response.status(400).json( dbError )
            })
    }
}
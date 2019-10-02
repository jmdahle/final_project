const db = require('../models');

module.exports = {
    create: function( request, response) {
        console.log('adding timeline entry');
        // console.log(request.body);
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
    delete: function(request, response) {
        console.log('removing timeline entry');
        console.log(request.params.timeline_id);
        db.TaskTimeline
            .findOneAndDelete(
                { _id: request.params.timeline_id }, async ( dbError, dbTaskTimeline) => {
                    if (dbError) {
                        dbError => response.status(400).json( dbError )
                    } else {
                        let deletedRecord = dbTaskTimeline;
                        let relatedTaskId = deletedRecord.taskId;
                        let relatedUserGoalId = deletedRecord.userGoalId;
                        await db.Task.findOneAndUpdate({
                            _id: relatedTaskId }, { $pull: {taskTimelines: request.params.timeline_id } }
                        );
                        await db.UserGoal.findOneAndUpdate ({
                            _id: relatedUserGoalId }, { $pull: {taskTimelines: request.params.timeline_id } }
                        );
                        return deletedRecord;
                    }
                }
            )
            .then( deletedRecord => response.json( deletedRecord ) )
            .catch( dbError => response.status(400).json( dbError ) )
    },
    getTimelineByTask: function(request, response) {
        console.log('get timeline entries by task');
        db.TaskTimeline
            .find(
                { taskId: request.params.task_id, userGoalId: request.params.usergoal_id },
                null,
                {sort: 'taskDate'}
            )
            .then ( dbTaskTimeline => response.json( dbTaskTimeline ) )
            .catch( dbError => response.status(400).json( dbError ) )
    }
}
const db = require('../models');

module.exports = {
    create: function( request, response ) {
        console.log('adding user goal');
        console.log(request.body);
        db.UserGoal
            .create(request.body)
            .then( async dbUserGoal => {
                let relatedUserId = dbUserGoal.userId;
                console.log(relatedUserId);
                let relatedGoalId = dbUserGoal.goalId;
                await db.Goal.findOneAndUpdate({ _id: relatedGoalId }, { $push: { userGoals: dbUserGoal._id } }, { new: true })

                await db.User.findOneAndUpdate({ _id: relatedUserId }, { $push: { userGoals: dbUserGoal._id } }, { new: true })
                return dbUserGoal
            })
            .then( dbUserGoal => response.json(dbUserGoal) )
            .catch( dbError => response.status(400).json( dbError) );
    },
    updateGoalPercent: function(request, response) {
        console.log('update usergoal percent complete')
        db.UserGoal
            .findOneAndUpdate( { _id: request.params.usergoal_id } , { $set: { goalPercent: request.params.pct } })
            .then (dbUserGoal => response.json( dbUserGoal ) )
            .catch ( dbError => response.status(400).json( dbError) )
    }
}
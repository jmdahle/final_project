const db = require('../models');

module.exports = {
    create: function( request, response ) {
        console.log('adding user goal');
        db.UserGoal
            .create(request.body)
            .then( dbUserGoal => response.json(dbUserGoal) )
            .catch( dbError => response.status(400).json( dbError) );
    },
    findByUser: function( request, response ){
        console.log('select UserGoals by user');
        db.UserGoal
            .find({ userId: request.params.user_id})
            .then( dbUserGoal => response.json(dbUserGoal))
            .catch( dbError => response.status(400).json(dbError));
    }
}
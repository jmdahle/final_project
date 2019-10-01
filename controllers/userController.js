const db = require('../models');

module.exports = {
    create: function (request, response) {
        console.log('adding user');
        console.log(request.body);
        db.User
            .create(request.body)
            .then( dbUser => response.json(dbUser) )
            .catch( dbError => response.status(400).json(dbError) )
    },
    loginUser: function (request, response) {
        console.log('trying login');
        console.log(request.body);
        db.User
            .find({
                email: request.body.email,
                password: request.body.password
            })
            .then( dbUser => response.json(dbUser) )
            .catch( dbError => response.status(400).json(dbError) )
    },
    findOne: function (request, response) {
        console.log('getting user details');
        db.User
            .findOne({
                _id: request.params.user_id
            }).select("-password")
            // .populate('userGoals')
            .populate({
                path: 'userGoals',
                populate: {path: 'taskTimelines goalId', select: 'goalName tasks taskId taskDate taskCompletedYN', options: {sort: {taskId: 1, taskDate: 1}}, 
                    populate: {path: 'tasks', select: 'taskName streakTarget totalTarget'}},
                // populate: {path: 'goalId', select: 'goalName'}
            })
            .then( dbUser => response.json(dbUser) )
            .catch( dbError => response.status(400).json(dbError) )
    }
}
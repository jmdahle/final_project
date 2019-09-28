const db = require('../models');

module.exports = {
    create: function (request, response) {
        console.log('adding goal');
        db.Goal
            .create(request.body)
            .then( dbGoal => {
                let relatedCategoryId = dbGoal.categoryId;
                return db.Category.findOneAndUpdate({ _id: relatedCategoryId }, { $push: { goals: dbGoal._id } }, { new: true });
            })
            .then( dbGoal => response.json(dbGoal) )
            .catch( dbError => response.status(400).json(dbError) );
    },
    findAll: function(request, response) {
        console.log('select goals');
        db.Goal
            .find({})
            .populate('tasks')
            .populate('userGoals')
            .then( dbGoal => response.json(dbGoal) )
            .catch( dbError => response.status(400).json(dbError) )
    },
    findInCategory: function(request, response) {
        console.log('select goals for category');
        db.Goal
            .find({categoryId: request.params.category_id})
            .populate('tasks')
            .populate('userGoals')
            .then( dbGoal => response.json(dbGoal ) )
            .catch( dbError => response.status(400).json(dbError) )
    },
    findOne: function(request, response) {
        console.log('select goal where id is ' + request.params.goal_id);
        db.Goal
            .find({ _id: request.params.goal_id })
            .populate('tasks')
            .populate('userGoals')
            .then( dbGoal => response.json(dbGoal) )
            .catch( dbError => response.status(400).json(dbError) )
    }
}
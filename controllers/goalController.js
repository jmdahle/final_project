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
            .then( dbGoal => response.json(dbGoal) )
            .catch( dbError => response.status(400).json(dbError) )
    }
}
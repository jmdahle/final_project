const db = require('../models');

module.exports = {
    create: function (request, response) {
        console.log('adding category');
        console.log(request.body);
        db.Category
            .create(request.body)
            .then( dbCategory => response.json(dbCategory) )
            .catch( dbError => response.status(400).json(dbError) )
    },
    findAll: function(request, response) {
        console.log('select categories');
        db.Category
            .find({})
            .populate('goals')
            .then( dbCategory => response.json(dbCategory) )
            .catch( dbError => response.status(400).json(dbError) )
    },
    findOne: function(request, response) {
        console.log('select category with id ' + request.params.category_id);
        db.Category
            .find({ _id: request.params.category_id} )
            .populate('goals')
            .then( dbCategory => response.json( dbCategory) )
            .catch( dbError => response.status(400).json(dbError) );
    }
}
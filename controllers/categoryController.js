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
            .then( dbCategory => response.json(dbCategory) )
            .catch( dbError => response.status(400).json(dbError) )
    }
}
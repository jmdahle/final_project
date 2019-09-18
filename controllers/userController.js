const db = require('../models');

module.exports = {
    create: function (request, response) {
        console.log('adding user');
        console.log(request.body);
        db.User
            .create(request.body)
            .then( dbUser => response.json(dbUser) )
            .catch( dbError => response.status(400).json(dbError) )
    }
}
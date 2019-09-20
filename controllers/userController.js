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
        console.log('tyring login');
        console.log(request.body);
        db.User
            .find({
                email: request.body.email,
                password: request.body.password
            })
            .then( dbUser => response.json(dbUser) )
            .catch( dbError => response.status(400).json(dbError) )
    }
}
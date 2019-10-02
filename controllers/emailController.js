const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'keepittogetherteam@gmail.com',
        pass:  'ckqdqorvvvjqflax' // application-specific
    }
});

module.exports = {
    email: function(request,response) {
        console.log('sending an email');
        let mailOptions = {
            from: 'keepittogetherteam@gmail.com',
            to: request.body.user_email,
            subject: 'Welcome to KIT',
            text: 'Welcome to Keep It Together, Knucklehead.'
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                response.sendStatus(500);
            } else {
                console.log('Email sent' + info.response);
                response.sendStatus(200);
            }
        });
    }
}
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'planetdahlelama@gmail.com',
        pass:  'yybarnidyasoluag' // application-specific
    }
});

module.exports = {
    email: function(request,response) {
        console.log('sending an email');
        let mailOptions = {
            from: 'planetdahlelama@gmail.com',
            to: request.body.user_email,
            subject: 'Welcome to KIT',
            text: 'Welcome to Keep It Together, knuckleheadd.'
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent' + info.response);
            }
        });
    }
}
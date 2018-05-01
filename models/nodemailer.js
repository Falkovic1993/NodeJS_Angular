const nodemailer = require('nodemailer');


// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
    // create reusable transporter object using the default SMTP transport
module.exports.sendmail = function(mail){
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "emilfalkknudsen93@gmail.com", // generated ethereal user
            pass: "Falken11" // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }

    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Emil" <emilfalkknudsen93@gmail.com>', // sender address
        to: mail, // list of receivers
        subject: 'Account created ✔', // Subject line
        text: 'Where is this text?', // plain text body
        html: '<b>You signed up!</b>' // html body
    };

    // send mail with defined transport object
 transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
}


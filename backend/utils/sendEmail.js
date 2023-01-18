const nodemailer = require('nodemailer');

require('dotenv').config()
  

module.exports = async (email, subject, text) => {
    

let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PASSPORT, // generated ethereal password
    },
});
    
    let info = await transporter.sendMail({
        from: process.env.USER, // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        // html: "<b>smit</b>", // html body
    });
    
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

 
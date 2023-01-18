const nodemailer = require('nodemailer');


  

module.exports = async (email, subject, text) => {
    

let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'smitdankhra01@gmail.com', // generated ethereal user
      pass: 'rahSqIfVBNtmdMOP', // generated ethereal password
    },
});
    
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <smitdankhra01@gmail.com>', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        // html: "<b>smit</b>", // html body
    });
    
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

 
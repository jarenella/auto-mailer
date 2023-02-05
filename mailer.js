const nodemailer = require('nodemailer');
require('dotenv').config();

function sendEmail(userEmail, message, receiverEmail) {

  //email that sends the messages
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL, //email account that sends all messages
      pass: process.env.PASSWORD
    }
  });

  const options = {
    from: process.env.EMAIL,
    to: receiverEmail, //receiver of the message
    subject: `New mail from ${userEmail}`,
    text: `${message}. Please get back to me at ${userEmail}.`
  }

  transporter.sendMail(options, function(err, info) {
    if (err) {
      console.log(err);
      console.log("User Email is " + userEmail)
      console.log("Message is " + message)
      console.log("Receiver Email is " + receiverEmail)
      return
    }
    console.log("Sent: " + info.response);
  })

}

module.exports = sendEmail;
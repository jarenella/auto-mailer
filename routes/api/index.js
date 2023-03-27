const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();
const sendEmail = require('../../mailer');
const userKeys = require('../../userKeys/userKeys.js');
const containsKey = require('../../helpers/containsKey');
const home = require('./home');

router.use('/', home) // <--- frontend

//request bodies should be formatted as such:
// {
// 	"email": "testmail@mail.com",
// 	"message": "Hey this is my message, hope ur well!",
//  "receiverEmail": "receiver@gmail.com"
// }

router.post('/send/:apiKey', async (req, res) => {
  const userKey = req.params.apiKey;
  const reqBody = await req.body;

  if (containsKey(userKey)) {
    const userEmail = await req.body.email;
    const message = await req.body.message;
    const receiverEmail = await req.body.receiverEmail;

    console.log("request body is ", reqBody)

    //if statement for if these exist first
    if (userEmail && message && receiverEmail) {
      sendEmail(userEmail, message, receiverEmail);
      res.send("Post request successfully recieved");
    } else { //if they don't exist, then there will be an error, as all fields are needed
      res.status(500).send("All fields must be filled out.");
    }

  } else {
    res.send("Not a valid API key");
  }
});

//this is called to wake up the server from sleeping
router.get('/wakeup', async (req, res) => {
  res.send({ "status": "Server is awake!" });
})

module.exports = router;
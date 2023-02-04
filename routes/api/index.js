const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();
const sendEmail = require('../../mailer');
const userKeys = require('../../userKeys/userKeys.js');
const containsKey = require('../../helpers/containsKey');

//request bodies should be formatted as such:
// {
// 	"email": "testmail@mail.com",
// 	"message": "Hey this is my message, hope ur well!",
//  "receiverEmail": "receiver@gmail.com"
// }

router.post('/send/:apiKey', async (req, res) => {
    const userKey = req.params.apiKey;
    
    if (containsKey(userKey)) {
        const userEmail = await req.body.email;
        const message = await req.body.message;
        const receiverEmail = await req.body.receiverEmail;

        sendEmail(userEmail, message, receiverEmail);

        res.send("Post request successfully recieved");
    } else {
        res.send("Not a valid API key");
    }
});

module.exports = router;
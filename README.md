![logo](https://cdn-icons-png.flaticon.com/512/3062/3062634.png)
# Auto-Mailer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Description

This API will automatically send an email to your specified receipient from a no-reply email, including an email telling them whereto get back to you, or your end user. This project was made because I couldn't find any free APIs that did this or that weren't barred off for the use of large companies only.

Why did I make this project? Let's say your making a static front end application and you want users to be able to send an email. Sure you could use an HTML mailto href, but that will open up a new window which isn't the best UX for most end users. Instead, it's often great to have an HTML form that will send an email on submit. But for this, a server needs to be able to process these requests and send the email for you. This project serves that purpose. It can be the back end API you call when your static front end app needs to automatically send an email.

The server is connected with a "DoNotReply" style email that will send a message to your users desired recipient, as well as let that recipient know the original email of the user, should they wish to respond to them.

# Table of Contents

- [Description](#Description)

- [Usage Information](#Usage-Information)

- [Deployment](#Deployment)

- [Contribution guidelines](#Contribution-guidelines)

- [License](#License)

# Usage Information

- Post requests made to https://Emailer.coffeebeen.repl.co/send/YourApiKey will be automatically emailed to whoever you choose to send the email to. Only a small amount of keys will be given out, so please let me know if you would like one.

- The request must be a post request and the body should be formatted as follows:
```
{
 	"email": "testmail@mail.com",
 	"message": "Hey this is my message, hope ur well!",
    	"receiverEmail": "receiver@gmail.com"
}
```

- The email key in this example is your email. This tells the end receipient who to get back to, as the email will be sent by a bot.

- The message is self explanitory, it's just the body of the email.

- The receiver is the person you wnat the email sent to.

# Deployment

Check out the deployment at https://emailer.coffeebeen.repl.co/

# Contribution guidelines

- Pull requests are more likely to be accepted if they simplify or clean up code

# License
    
- [MIT] https://www.mit.edu/~amini/LICENSE.md


# Questions?

- GitHub: jarenella

- Email: ijarenella@gmail.com



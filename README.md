![logo](https://cdn-icons-png.flaticon.com/512/3062/3062634.png)
# Auto-Mailer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Description

This API will automatically send an email to your specified receipient from a no-reply email, including an email telling them whereto get back to you, or your end user. This project was made because I couldn't find any free APIs that did this or that weren't barred off for the use of large companies only.

# Table of Contents

- [Description](#Description)

- [Usage Information](#Usage-Information)

- [Deployment](#Deployment)

- [Contribution guidelines](#Contribution-guidelines)

- [License](#License)

# Usage Information

- Post requests made to https://Emailer.coffeebeen.repl.co/send/YourApiKey will be automatically emailed to whoever you choose to send the email to. Project isn't entirely done, but I will be giving out keys shortly.

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



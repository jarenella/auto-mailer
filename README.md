# auto-mailer

Post requests made to https://Emailer.coffeebeen.repl.co/send/YourApiKey will be automatically emailed to whoever you choose to send the email to. Project isn't entirely done, but I will be giving out keys shortly.

the request must be a post request and the body should be formatted as follows:
```
	{
 		"email": "testmail@mail.com",
 		"message": "Hey this is my message, hope ur well!",
    	"receiverEmail": "receiver@gmail.com"
	}
```

The email key is your email. This tells the end receipient who to get back to, as the email will be sent by a bot.
The message is self explanitory, it's just the body of the email.
The receiver is the person you wnat the email sent to.
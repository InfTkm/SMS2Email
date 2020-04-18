# SMStoEmail
I have a SIM card from another country used solely as a verification code receiver.  
Unfortunately, my primary phone doesn't support dual sim.  
So I make this app installed in a backup phone and it will forward text messages to my email.  
There are solutions in the Play Store, but often fail, so I need to build one for myself. 
A simple one.

# Architecture  
Used React Native. SendGrid API to send email.
Libraries: react-native-get-sms-android, react-native-background-timer

# How to run
You first need a file `config.js` in the root directory, which export `from`, `to`, and `auth`.  
`from` is the from email, you need to register an account (free) and verify a from email on SendGrid.  
`to` is the email you want to notify.  
`auth` is the SendGrid authentication token.  

`react-native run-androi` as a normal react native program.

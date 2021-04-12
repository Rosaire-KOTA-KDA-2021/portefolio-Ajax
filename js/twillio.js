// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid = "AC646b8f50d895611525d1f7c467e6c727";
const authToken = "ec27b62b8d5cc95681b761b5e379bc55";

// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    to: "+243816755166",
    from: "+18177894165",
    body: "Bonjour Rosaire. xva",
  })
  .then((message) => console.log(message.sid));

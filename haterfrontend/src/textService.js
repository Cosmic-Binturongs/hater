

let sendSMS = () => {

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  const twilioVirtualNumber = '19894553207'
  const user_handle = ''
  const user_phone = ''

  client.messages
    .create({
      body: 'Your hate is getting a lot of negativity!',
      from: twilioVirtualNumber,
      to: `16467093405`
    })
    .then(message => console.log(message.sid));

}

sendSMS();


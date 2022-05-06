

let sendSMS = () => {

  const accountSid = 'AC341560422bf71c1a6fe53115b1067dd6';
  const authToken = '6f09c307d1f608def52c74fca3eb23ac'
  const client = require('twilio')(accountSid, authToken);

  const user_handle = ''
  const user_phone = ''

  client.messages
    .create({
      body: 'Your hate is getting a lot of negativity!',
      from: `19894553207`,
      to: `16467093405`
    })
    .then(message => console.log(message.sid));

}

sendSMS();


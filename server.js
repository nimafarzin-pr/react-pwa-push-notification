const express = require('express');
const bodyParser = require('body-parser');
const webPush = require('web-push');
const cors = require('cors');

const app = express();

app.use(express.static('public'));


// VAPID keys
const vapidKeys = {
  publicKey: 'BDoDrobLJcJoM3g7U821ccGoaTRqwEfMuqkc7DeH1cDWhEHOXdQm_s9j3rIQLTxGM72sVDeMWPmQDsXnGsBKB9w',
  privateKey: 'hUQCb1XN25TZpycEgr3cQGUeg0KzMWKzN1bDgWT0PQA',
};

webPush.setVapidDetails(
  'mailto:your-email@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

app.use(cors());
app.use(bodyParser.json());

// In-memory storage for subscriptions
let subscriptions = [];

// Endpoint to save a subscription
app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(201).json({ message: 'Subscription added!' });
});

// Endpoint to trigger a push notification
app.post('/send-notification', async (req, res) => {
  const notificationPayload = {
    title: 'Test Notification',
    body: 'This is a test notification sent from the backend.',
  };


  try{
    for (const subscription of subscriptions) {
      console.log(JSON.stringify(notificationPayload),webPush,subscription);
      
      await webPush.sendNotification(subscription, JSON.stringify(notificationPayload))
    }
  }catch (error) {
    return  res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Notification sent!' });
});





// app.listen(port, () => {
//   console.log(`Push backend running at http://localhost:${port}`);
// });

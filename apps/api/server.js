const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let eventData = {};

app.post('/api/save-event-data', (req, res) => {
  const { eventTitle, organizer, eventType } = req.body;

  eventData = {
    eventTitle,
    organizer,
    eventType,
  };

  console.log('Event data saved', eventData);

  res.json({ success: true });
});

app.get('/api/get-events', (req, res) => {
  // Send the stored event data
  res.json({ events: [eventData] }); // In a real application, you would retrieve data from a database
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

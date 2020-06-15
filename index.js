// Import express and create a new express app
const express = require('express');
const app = express();

// Define a basic GET request. The request & response object are passed in
app.get('/', async (req, res) => {
  // Use the request object to send back 'Hello world!'
  res.send('Hello world!');
});

// Define the port we're going to listen for requests on
const port = 3000;

// Tell the app to listen on that port, and log out to the console once its listening.
app.listen(port);
console.log(`listening on http://localhost:${port}`);

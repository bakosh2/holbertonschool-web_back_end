const express = require('express');

// Create an instance of the express application
const app = express();
const PORT = 1245;

/**
 * Route handler for the root endpoint.
 * Responds with 'Hello Holberton School!'
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app variable for testing/modular use
module.exports = app;

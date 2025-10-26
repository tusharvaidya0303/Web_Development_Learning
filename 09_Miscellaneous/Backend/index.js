const express = require('express');
const app = express();

const port = 8080;

app.get('/register', (req, res) => {
  res.send('GET request to the register');
});
app.post('/register', (req, res) => {
  res.send('POST request to the register');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

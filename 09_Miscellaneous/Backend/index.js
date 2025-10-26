const express = require('express');
const app = express();

app.use (express.urlencoded({ extended: true }));
app.use (express.json());

const port = 8080;

app.get('/register', (req, res) => {
    const { username } = req.query;
  res.send(`GET request to Login. Welcome ${username}`);
});
app.post('/register', (req, res) => {
  const { username } = req.body;
  res.send(`POST request to Login. Welcome ${username}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

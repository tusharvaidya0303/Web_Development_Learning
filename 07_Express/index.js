const express = require('express');
const app = express();

console.dir(app)

let port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// app.use( (req, res) => {
//   console.log('Received a request');
//   res.send({
//     name:'Apple',
//     color:'Red',
//   });
// });

app.get('/', (req, res) => {
  res.send('you have reached the home page');
});
app.get('/apple', (req, res) => {
  res.send('you have reached the apple page');
});
app.get('/orange', (req, res) => {
  res.send('you have reached the orange page');
});
app.get('*', (req, res) => {
  res.send('404 Page Not Found');
});
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});

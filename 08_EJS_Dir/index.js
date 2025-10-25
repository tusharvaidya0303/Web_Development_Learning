const express = require('express');
const app = express();
const path = require('path');

const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});
app.get('/hello', (req, res) => {
    res.send('Hello.');
});

app.get('/rolldice', (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice.ejs', { diceVal });
});

app.get('/instagram/:username', (req, res) => {
    const { username } = req.params;
    res.render('instagram.ejs', { username });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
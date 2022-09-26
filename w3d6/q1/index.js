const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

const date = new Date();
const hour = date.getHours();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.render("index", {
        time: date.toTimeString(),
        hour: hour
    });
});

app.listen(3000);
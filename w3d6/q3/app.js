const express = require('express');
const path = require('path');
const app = express();
app.listen(3000, () => {
    console.log('Project open from here');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    res.render('index');
});


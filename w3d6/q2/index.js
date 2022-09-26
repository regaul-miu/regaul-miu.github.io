const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
    res.render("index"); 
});

app.post('/result', (req, res, next)=>{
    let name = req.body.username;
    let myage = req.body.age;
    res.render("result", { name: name, myage: myage });
})

app.listen(3000, () => {
    console.log('Running server on port : 3000 .....');
});



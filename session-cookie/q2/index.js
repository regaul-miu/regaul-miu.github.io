const bodyParser = require('body-parser');
const express = require('express');
const path = require("path");
const session = require('express-session');
const parseurl = require('parseurl');

const app = express();

app.use(session({ secret: 'salt for cookie signing' })); 

const date = new Date();
const hour = date.getHours();

console.log(hour);
if(hour >=6 && hour <18){
    app.use(express.static(path.join(__dirname + '/public')));
}
else {
    app.use(express.static(path.join(__dirname + '/public/css/')));
}

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname + '/index.html'));
})

app.get(`/output`, (request, response, next) => {
    response.send(`Welcome ${request.session.name}, age ${request.session.age}`); 
})

app.post('/result', (request, response, next)=>{
    request.session.name = request.body.username;
    request.session.age = request.body.age;
    response.redirect('/output');
})

app.listen(3000, () => {
    //all of your code are here, this is what will happen in server
    console.log('Running server on port : 3000 .....');
});
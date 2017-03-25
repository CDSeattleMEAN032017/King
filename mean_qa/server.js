const express = require('express'),
    app = express(),
    path = require('path'),
    bp = require('body-parser'),
    session = require('express-session')
    port = 8000;

app.use(session({
    secret: 'bd9a77a4c1debfc5993f556853cdbe352e63246e9143ac4bd7559d5d22c3f6f463e46f694ab0438461f1515e75b415d8523a3a94c8f47139d5d8d77da09b664b',//This is King Mean Belt
    resave: true,
    saveUninitialized: true
}))
app.use(express.static(path.join(__dirname + '/client')));
app.use(express.static(path.join(__dirname + '/node_modules')));
app.use(bp.json());

app.listen(port, function() {
    console.log(`Mean Belt Server is listening on port ${port}`)
})

require('./server/config/mongoose.js')// always above routes
require('./server/config/routes.js')(app) //set up routes

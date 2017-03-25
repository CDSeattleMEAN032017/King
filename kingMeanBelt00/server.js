var express = require('express'),
    app = express(),
    path = require('path'),
    bp = require('body-parser'),
    session = require('express-session'),
    port = 8000;

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './node_modules')));
app.use(bp.json());
app.use(session({
    secret: 'This is secret',
    resave: false,
    saveUninitialized: true
}));

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening on port ${port}`);
    }
});

require(path.join(__dirname, './server/config/mongoose.js'));
require(path.join(__dirname, './server/config/routes.js'))(app);

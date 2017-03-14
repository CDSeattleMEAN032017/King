var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quoting');
// Quote
var QuoteSchema = new mongoose.Schema({
  Name: String,
  Quote: String,
  CreatedAt: {type: Date, default: new Date},
  UpdatedAt: {type: Date, default: new Date}
});

var Quote = mongoose.model('quotes', QuoteSchema);
// Comment
var CommentSchema = new mongoose.Schema({
  Name: String,
  Comment: String,
  CreatedAt: {type: Date, default: new Date},
  UpdatedAt: {type: Date, default: new Date}
});

var Comment = mongoose.model('comments', CommentSchema);
// Point server to views
app.set('views', path.join(__dirname, './views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');

require('./server/config/port.js');
require('./server/config/passport.js');
require('./server/config/authFacebook.js')(app, passport);
require('./server/config/authTwitter.js')(app, passport);
require('./server/config/authGithub.js')(app, passport);
require('./server/config/routes.js')(app, passport, Quote);

app.listen(port, function(){
  console.log(`Server Listening port on ${port}`);
});

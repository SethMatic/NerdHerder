require("dotenv").config();
var express = require("express");
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'sheepdb'
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("views"));


// Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/home', function (request, response) {
  if (request.session.loggedin) {
      response.send('Welcome back, ' + request.session.username + '!');
  } else {
      response.send('Please login to view this page!');
  }
  response.end();
});

app.post('/', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username && password) {
      connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
          if (results.length > 0) {
              request.session.loggedin = true;
              request.session.username = username;
              response.redirect('/home');
          } else {
              response.send('Incorrect Username and/or Password!');
          }
          response.end();
      });
  } else {
      response.send('Please enter Username and Password!');
      response.end();
  }
});


// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app.enable('strict routing');

var mysql = require('mysql')
var express = require('express')
var app = express();
var session = require('express-session')
var bodyParser = require('body-parser')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'sheepdb'
});

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = function (app) {
  app.post('/register', function (request, response) {
    // Create variables and set to the post data
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    connection.query('INSERT INTO accounts VALUES (NULL, FALSE, ?, ?, ?)', [username, password, email], function (error, results, fields) {
      console.log(response, "YAY!");
      response.send("account created")
    });
  });
  app.post('/', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
      connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
        if (results.length > 0) {
          // request.session.loggedin = 1;
          request.session.username = username;
          response.redirect('/home');

        } else {
          response.send('Incorrect Username and/or Password!');
          console.log('wrong user/pass')
        }
        response.end();
      });
    } else {
      response.send('Please enter Username and Password!');
      console.log('enter user/pass')
      response.end();
    }
  });




};
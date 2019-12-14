var mysql = require('mysql')
var express = require('express')
var app = express();
var session = require('express-session')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'docker',
    database: 'sheepdb'
  });
  
  
  app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  
  module.exports = function(app) {
    app.post('/register', function (request, response) {
      // Create variables and set to the post data
      var username = request.body.username;
      var password = request.body.password;
      var email = request.body.email;
      connection.query('INSERT INTO accounts VALUES (NULL, FALSE, ?, ?, ?)', [username, password, email], function (error, results, fields) {
        console.log(results, "YAY!");
        response.redirect('/');
      });
    });
    app.post('/', function (request, response) {
      var username = request.body.username;
      var password = request.body.password;
    //   var loggedin = request.session.loggedin;
      if (username && password) {
          connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
              if (results.length > 0) {
                //   request.session.loggedin = 1;
                connection.query('UPDATE accounts SET loggedin = TRUE WHERE username = ?', [username]);
                response.cookie('username', username);
                // request.session.username = username;
                response.redirect('/home');
                // if (request.session.end()) {
                //     connection.query('UPDATE accounts SET loggedin = FALSE WHERE username = ?', [username]);
                // }
                
                
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
  app.post('/home', function (request, response) {
    var title = request.body.title;
    var text = request.body.body;
    var cookieUsername = request.cookies.username;
    connection.query('SELECT id FROM accounts WHERE username = ?', [cookieUsername], function (error, results, fields){
      console.log(results[0].id)
      console.log(title)
      console.log(text)
      // if (results.length > 0) {
      connection.query('INSERT INTO gamedata VALUES (?, ?, ?)', [results[0].id, title, text]);
      // } else {
      //   response.send('fuck')
      // }
    })
  });
  };
  // module.exports = userRoutes;
  
var db = require("../models");
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'sheepdb'
});

module.exports = function(app) {
  app.post('/register', function (request, response) {
    // Create variables and set to the post data
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    // Check if the post data exists
    // if (username && password && email) {
    //     // Check if account exists already in the accounts table, checks for username but you could change this to email etc
    //     connection.query('SELECT * FROM accounts WHERE username = ?', [username, password], function (error, results, fields) {
    //         if (results.length > 0) {
    //             response.render('register.html', { msg: 'Username is already taken' });
    //         } else if (!/\S+@\S+\.\S+/.test(email)) {
    //             // Make sure email is valid
    //             response.render('register.html', { msg: 'Invalid email address!' });
    //         } else if (!/[A-Za-z0-9]+/.test(username)) {
    //             // Username validation, must be numbers and characters
    //             response.render('register.html', { msg: 'Username must contain only characters and numbers!' });
    //         } else {
    //           // Insert account with no activation code
    //           connection.query('INSERT INTO accounts VALUES (NULL, ?, ?, ?, "")', [username, password, email], function (error, results, fields) {
    //               response.render('register.html', { msg: 'You have successfully registered!' });
    //           });
    //       }
    //     });
    //   }
    connection.query('INSERT INTO accounts VALUES (NULL, ?, ?, ?)', [username, password, email], function (error, results, fields) {
      console.log(response, "YAY!");
    });
  });
};
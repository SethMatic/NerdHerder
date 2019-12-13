var mysql = require('mysql')
var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'sheepdb'
});
var app = express();
// require('../../routes/userRoutes')(app)
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
module.exports = function (app) {
  app.post('/', function (request, response) {
    var username = request.body.username;
    connection.query('SELECT * FROM accounts WHERE username = ?', [username], function (error, results, fields) {
      response.contentType('html');
      // response.write(username, $("#displayedUser"));
      console.log(response, "AsdasdAFASF!!!")
    })

  })
}


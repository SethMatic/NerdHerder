

module.exports = function (app) {
  // app.post('/register', function (request, response) {
  //   // Create variables and set to the post data
  //   var username = request.body.username;
  //   var password = request.body.password;
  //   var email = request.body.email;
  //   connection.query('INSERT INTO accounts VALUES (NULL, ?, ?, ?)', [username, password, email], function (error, results, fields) {
  //     console.log(response, "YAY!");
  //   });
  // });
  // app.post('/', function (request, response) {
  //   var username = request.body.username;
  //   var password = request.body.password;
  //   if (username && password) {
  //       connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
  //           if (results.length > 0) {
  //               request.session.loggedin = true;
  //               request.session.username = username;
  //               response.redirect('/home');
  //           } else {
  //               response.send('Incorrect Username and/or Password!');
  //               console.log('wrong user/pass')
  //           }
  //           response.end();
  //       });
  //   } else {
  //       response.send('Please enter Username and Password!');
  //       console.log('enter user/pass')
  //       response.end();
  //   }
  // });




};
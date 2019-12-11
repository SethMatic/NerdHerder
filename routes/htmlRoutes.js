var path = require("path")
module.exports = function(app) {
      // default page is login
      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/login.html"));
      });
      // home
      app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/home.html"));
      });
      // register page
      app.get("/register", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/register.html"));
      });
      // 404
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/404.html"));
      });
};

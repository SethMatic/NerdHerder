var db = require("../models");
var loginHTML = ("../views/login")
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
    
      // 404
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/404.html"));
      });
};

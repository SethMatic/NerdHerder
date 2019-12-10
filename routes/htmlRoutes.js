var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../view/login.html"));
      });
    
      app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/home.html"));
      });
    
      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/404.html"));
      });
};

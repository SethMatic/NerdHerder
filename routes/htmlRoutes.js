var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../real/views/login.html"));
      });
    
      app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "real/views/home.html"));
      });
    
      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "real/views/404.html"));
      });
};

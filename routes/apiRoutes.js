var db = require("../models");

module.exports = function(app) {
    app.get("/api/accounts", function(req, res) {
        db.account.findAll({}).then(function(dbAccounts) {
          res.json(dbAccounts);
        });
    });
    app.post("/api/accounts", function(req, res) {
        db.account.create(req.body).then(function(dbAccounts) {
          res.json(dbAccounts);
        });
    });
    
};
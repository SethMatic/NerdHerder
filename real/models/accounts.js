module.exports = function(sequelize, DataTypes) {
    var account = sequelize.define("Account", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return account;
  };
  
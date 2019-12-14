module.exports = function(sequelize, DataTypes) {
    var account = sequelize.define("Account", {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    });
    return account;
  };
  
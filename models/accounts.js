module.exports = function (sequelize, DataTypes) {
  var account = sequelize.define("accounts", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return account;
};

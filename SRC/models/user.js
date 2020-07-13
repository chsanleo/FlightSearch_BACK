'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    surname: DataTypes.STRING,
    password: DataTypes.STRING,
    passport: DataTypes.STRING,
    token: DataTypes.STRING,
    questionSecret: DataTypes.STRING,
    answerSecret: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    CountryId: DataTypes.INTEGER,
    ContactInfoId: DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'User',
  });
  return User;
};
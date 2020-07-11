'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.ContactInfo);
      User.hasOne(models.Country);
      User.hasMany(models.UserPayData);
      // define association here
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
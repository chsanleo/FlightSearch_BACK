'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPayDate extends Model {

    static associate(models) { }
  };
  UserPayDate.init({
    preference: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER,
    PayDataId: DataTypes.INTEGER,
    PayTypeId: DataTypes.INTEGER
  }, {
    paranoid:true,
    sequelize,
    modelName: 'UserPayDate',
  });
  return UserPayDate;
};
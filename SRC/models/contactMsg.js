'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactMsg extends Model {
    
    static associate(models) {
    }
  };
  ContactMsg.init({
    message: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    subject: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    paranoid : true,
    sequelize,
    modelName: 'ContactMsg',
  });
  return ContactMsg;
};
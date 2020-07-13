'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactInfo extends Model {

    static associate(models) { }
  };
  ContactInfo.init({
    address: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    paranoid : true,
    sequelize,
    modelName: 'ContactInfo',
  });
  return ContactInfo;
};
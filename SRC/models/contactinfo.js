'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactInfo extends Model {

    static associate(models) {


      // define association here
    }
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
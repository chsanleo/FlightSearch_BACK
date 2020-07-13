'use strict';
const {
  Model 
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Currency extends Model {

    static associate(models) {

    }
  };
  Currency.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    CountryId: DataTypes.INTEGER
  }, {
    paranoid  :true,
    sequelize,
    modelName: 'Currency',
  });
  return Currency;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {

    static associate(models) {

    }
  };
  Company.init({
    name: DataTypes.STRING,
    IataCodeId: DataTypes.INTEGER,
    CurrencyId: DataTypes.INTEGER,
    CountryId: DataTypes.INTEGER,
    ContactInfoId: DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
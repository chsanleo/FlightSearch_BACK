'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {

    static associate(models) { }
  };
  Country.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    prefix: DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Country',
  });
  return Country;
};
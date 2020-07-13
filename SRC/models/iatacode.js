'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IataCode extends Model {

    static associate(models) { }
  };
  IataCode.init({
    code: DataTypes.STRING
  }, {
    paranoid:true,
    sequelize,
    modelName: 'IataCode',
  });
  return IataCode;
};
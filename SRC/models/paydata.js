'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PayData extends Model {

    static associate(models) {

    }
  };
  PayData.init({
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    CVC: DataTypes.INTEGER,
    expired: DataTypes.DATE
  }, {
    paranoid:true,
    sequelize,
    modelName: 'PayData',
  });
  return PayData;
};
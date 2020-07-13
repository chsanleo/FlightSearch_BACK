'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PayType extends Model {

    static associate(models) {

    }
  };
  PayType.init({
    descript: DataTypes.STRING
  }, {
    paranoid : true,
    sequelize,
    modelName: 'PayType',
  });
  return PayType;
};
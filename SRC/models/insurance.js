'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insurance extends Model {

    static associate(models) { }
  };
  Insurance.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    price : DataTypes.INTEGER,
    ContactInfoId: DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Insurance',
  });
  return Insurance;
};
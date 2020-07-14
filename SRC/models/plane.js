'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plane extends Model {

    static associate(models) { 
    }
  };
  Plane.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    yearOfFabric: DataTypes.DATE,
    plate: DataTypes.STRING,
    CompanyId: DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Plane',
  });
  return Plane;
};
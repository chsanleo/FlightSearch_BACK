'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Plane.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    yearOfFabric: DataTypes.DATE,
    plate: DataTypes.STRING
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Plane',
  });
  return Plane;
};
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
      /*Plane.hasMany(models.Flight);
      Plane.hasOne(models.Company);
      Plane.hasMany(models.Seat);*/
      // define association here
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
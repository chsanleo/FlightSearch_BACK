'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {

    static associate(models) {

      
      // define association here
    }
  };
  Flight.init({
    price: DataTypes.FLOAT,
    code: DataTypes.STRING,
    takeOffDate: DataTypes.DATE,
    landingDate: DataTypes.DATE,
    LandingAirportId: DataTypes.INTEGER,
    TakeOffAirportId: DataTypes.INTEGER,
    PlaneId: DataTypes.INTEGER,
    CurrencyId: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Flight.hasOne(models.Plane);
      Flight.hasOne(models.Company);
      Flight.hasOne(models.Currency);
      Flight.hasMany(models.Airport, {as: landingAirport});
      Flight.hasMany(models.Airport, {as: takeoffAirport});
      
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
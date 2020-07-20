'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    static associate(models) { 
      Airport.belongsTo(models.ContactInfo);
      Airport.belongsTo(models.IataCode);
      Airport.belongsTo(models.Country);
    }
  };
  Airport.init({
    name: DataTypes.STRING,
    companyManag: DataTypes.STRING,
    smooking: DataTypes.BOOLEAN,
    CountryId: DataTypes.INTEGER,
    ContactInfoId: DataTypes.INTEGER,
    IataCodeId: DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};
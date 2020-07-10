'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Airport.hasOne(models.IataCode);
      Airport.hasOne(models.Country);
      Airport.hasOne(models.ContactInfo);
      Airport.belongsTo(models.Flight); //Revisar
     
      // define association here
    }
  };
  Airport.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    companyManag: DataTypes.STRING,
    smooking: DataTypes.BOOLEAN,
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};
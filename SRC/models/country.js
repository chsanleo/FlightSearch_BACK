'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Country.hasMany(models.Company);
      Country.hasMany(models.Airport);
      Country.hasOne(models.Currency);
      Country.hasMany(models.User);
      // define association here
    }
  };
  Country.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    prefix: DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Country',
  });
  return Country;
};
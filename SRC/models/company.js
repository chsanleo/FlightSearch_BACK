'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.hasMany(models.Plane);
      Company.hasOne(models.IataCode);
      Company.hasOne(models.Country);
      Company.hasOne(models.Currency);
      Company.hasOne(models.ContactInfo);
      // define association here
    }
  };
  Company.init({
    name: DataTypes.STRING
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
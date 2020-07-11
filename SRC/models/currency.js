'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Currency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Currency.hasMany(models.Flight);
      Currency.belongsTo(models.Country);
      Currency.hasMany(models.Company);
      // define association here
    }
  };
  Currency.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    paranoid  :true,
    sequelize,
    modelName: 'Currency',
  });
  return Currency;
};
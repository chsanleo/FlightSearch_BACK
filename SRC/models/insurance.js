'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insurance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Insurance.hasOne(models.ContactInfo);
      // define association here
    }
  };
  Insurance.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    price : DataTypes.INTEGER
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Insurance',
  });
  return Insurance;
};
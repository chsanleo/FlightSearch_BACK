'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ContactInfo.hasOne(models.Airport); //Revisar
      ContactInfo.hasOne(models.Company);
      ContactInfo.hasOne(models.User);
      ContactInfo.hasOne(models.Insurance);

      // define association here
    }
  };
  ContactInfo.init({
    address: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    paranoid : true,
    sequelize,
    modelName: 'ContactInfo',
  });
  return ContactInfo;
};
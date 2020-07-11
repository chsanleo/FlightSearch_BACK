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
      ContactInfo.belongsTo(models.Airport); //Revisar
      ContactInfo.belongsTo(models.Company);
      ContactInfo.belongsTo(models.User);
      ContactInfo.belongsTo(models.Insurance);

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
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PayData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PayData.belongsTo(models.UserPayDate);
      
      // define association here
    }
  };
  PayData.init({
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    CVC: DataTypes.INTEGER,
    expired: DataTypes.DATE
  }, {
    paranoid:true,
    sequelize,
    modelName: 'PayData',
  });
  return PayData;
};
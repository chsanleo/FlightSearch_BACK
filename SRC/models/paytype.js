'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PayType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PayType.hasOne(models.UserPayData);
      // define association here
    }
  };
  PayType.init({
    descript: DataTypes.STRING
  }, {
    paranoid : true,
    sequelize,
    modelName: 'PayType',
  });
  return PayType;
};
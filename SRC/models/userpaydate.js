'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPayDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserPayDate.hasOne(models.PayData);
      UserPayDate.hasOne(models.PayType);
      UserPayDate.belongsTo(models.User);
      // define association here
    }
  };
  UserPayDate.init({
    preference: DataTypes.BOOLEAN
  }, {
    paranoid:true,
    sequelize,
    modelName: 'UserPayDate',
  });
  return UserPayDate;
};
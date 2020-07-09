'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Seat.init({
    type: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};
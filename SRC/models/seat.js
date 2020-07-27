'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {

    static associate(models) { }
  };
  Seat.init({
    type: DataTypes.STRING,
    price: DataTypes.STRING,
  }, {
    paranoid : true,
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};
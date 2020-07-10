'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Seats', [
      { type: 'window', price: 'firstClass'},
      { type: 'corridor', price: 'firstClass'},
      { type: 'window', price: 'business'},
      { type: 'corridor', price: 'business'},
      { type: 'window', price: 'economic'},
      { type: 'corridor', price: 'economic'},
      { type: 'center', price: 'economic'}
    ]);
  },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Seats', null, {});
    }
};

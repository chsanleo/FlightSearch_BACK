'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let today = new Date();
    return queryInterface.bulkInsert('Flights',
      [
        { price: 500.50, code: "A550B", takeOffDate: today.getDate() + 2, landingDate: today.getDate() + 3, CurrencyId:49 },
        { price: 250.2, code: "B660D", takeOffDate: today.getDate() + 5, landingDate: today.getDate() + 7, CurrencyId:49 },
        { price: 1564.0, code: "1550A", takeOffDate: today.getDate() + 4, landingDate: today.getDate() + 4, CurrencyId:49 },
        { price: 7895.2, code: "YUR89", takeOffDate: today.getDate() + 1, landingDate: today.getDate() + 2, CurrencyId:49 },
        { price: 1223.0, code: "AXA20", takeOffDate: today.getDate() + 1, landingDate: today.getDate() + 1, CurrencyId:49 }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flights', null, {});
  }
};

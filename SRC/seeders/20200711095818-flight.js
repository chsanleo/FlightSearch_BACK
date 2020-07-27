'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let today = new Date();
    return queryInterface.bulkInsert('Flights',
      [
        { price: 500.50, code: "A550B", takeOffDate: today.getDate() + 2, landingDate: today.getDate() + 3, CurrencyId: 49, CompanyId: 4, PlaneId: 1, LandingAirportId: 1, TakeOffAirportId: 2, stock: 10 },
        { price: 250.2, code: "B660D", takeOffDate: today.getDate() + 5, landingDate: today.getDate() + 7, CurrencyId: 49, CompanyId: 6, PlaneId: 2, LandingAirportId: 2, TakeOffAirportId: 1, stock: 5 },
        { price: 1564.0, code: "1550A", takeOffDate: today.getDate() + 4, landingDate: today.getDate() + 4, CurrencyId: 49, CompanyId: 7, PlaneId: 4, LandingAirportId: 4, TakeOffAirportId: 1, stock: 10 },
        { price: 7895.2, code: "YUR89", takeOffDate: today.getDate() + 1, landingDate: today.getDate() + 2, CurrencyId: 49, CompanyId: 4, PlaneId: 1, LandingAirportId: 7, TakeOffAirportId: 3, stock: 2 },
        { price: 1223.0, code: "AXA20", takeOffDate: today.getDate() + 1, landingDate: today.getDate() + 1, CurrencyId: 49, CompanyId: 50, PlaneId: 4, LandingAirportId: 3, TakeOffAirportId: 2, stock: 10 }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flights', null, {});
  }
};

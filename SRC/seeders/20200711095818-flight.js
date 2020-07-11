'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Flights',
    [ 
      { price:500.50, code: "A550B", takeOffDat: Date.now().AddDays(2), landingDate: Date.now().AddDays(3)},
      { price:250.2, code: "B660D", takeOffDat: Date.now().AddDays(5), landingDate: Date.now().AddDays(7)},
      { price:1564.0, code: "1550A", takeOffDat: Date.now().AddDays(4), landingDate: Date.now().AddDays(4)},
      { price:7895.2, code: "YUR89", takeOffDat: Date.now().AddDays(1), landingDate: Date.now().AddDays(2)},
      { price:1223.0, code: "AXA20", takeOffDat: Date.now().AddDays(1), landingDate: Date.now().AddDays(1)}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flights', null, {});
  }
};

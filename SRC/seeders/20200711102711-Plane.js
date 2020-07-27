'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('planes',
      [
        { type: 'Comertial', name: 'Boing', model: 'Boing 737', yearOfFabric: '2000-06-01', plate: 'EC-YAA', CompanyId: 4 },
        { type: 'Comertial', name: 'Airbus', model: 'Airbus A380', yearOfFabric: '2010-10-01', plate: 'EC-YAB', CompanyId: 6 },
        { type: 'Comertial', name: 'Airbus', model: 'Airbus A340', yearOfFabric: '2008-08-01', plate: 'EC-YAC', CompanyId: 7 },
        { type: 'Comertial', name: 'Airbus', model: 'Airbus A747', yearOfFabric: '20012-08-01', plate: 'EC-BBD', CompanyId: 50 }

      ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('planes', null, {})
  }
};

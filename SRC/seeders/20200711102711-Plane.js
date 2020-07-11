'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('planes',
    [
      {type: 'Comertial', name: 'Boing', model:'Boing 737', yearOfFabric: '2000-06-01', plate: 'EC-YAA'},
      {type: 'Comertial', name: 'Airbus', model:'Airbus A380', yearOfFabric: '2010-10-01', plate: 'EC-YAB'},
      {type: 'Comertial', name: 'Airbus', model:'Airbus A340', yearOfFabric: '2008-08-01', plate: 'EC-YAC'}
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('planes', null, {})
  }
};

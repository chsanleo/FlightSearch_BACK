'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('insurances', 
    [
      {type : 'low', name: 'Pack1', company:'Branson Air Express', price: 20, ContactInfoId:24 },
      {type : 'meddium', name: 'Pack2', company:'VASCO', price: 25, ContactInfoId:25 },
      {type : 'high', name: 'Pack3', company:'Avianca', price: 30, ContactInfoId:26 },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('insurances', null, {})
  }
};

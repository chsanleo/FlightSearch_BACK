'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('contactInfos',
    [
      //Airport
      {address:"Palomino Street 30", telephone:"123456",email:"contact@info.com"},
      {address:"Menganito Street 15", telephone:"789123",email:"contact@info.com"},
      {address:"Fulanito Street 28", telephone:"456789",email:"contact@info.com"},
      {address:"Sesame Street", telephone:"147258",email:"contact@info.com"},
      {address:"Yellowstone Park", telephone:"369147",email:"contact@info.com"},
      {address:"Baker Street", telephone:"258369",email:"contact@info.com"},
      {address:"5th Avenue", telephone:"159753",email:"contact@info.com"},
      {address:"Palomino Street 30", telephone:"123456",email:"contact@info.com"},
      {address:"Menganito Street 15", telephone:"789123",email:"contact@info.com"},
      {address:"Fulanito Street 28", telephone:"456789",email:"contact@info.com"},
      {address:"Sesame Street", telephone:"147258",email:"contact@info.com"},
      {address:"Yellowstone Park", telephone:"369147",email:"contact@info.com"},
      {address:"Baker Street", telephone:"258369",email:"contact@info.com"},
      {address:"5th Avenue", telephone:"159753",email:"contact@info.com"},
      {address:"Palomino Street 30", telephone:"123456",email:"contact@info.com"},
      {address:"Menganito Street 15", telephone:"789123",email:"contact@info.com"},
      //
      {address:"Fulanito Street 28", telephone:"456789",email:"contact@info.com"},
      {address:"Sesame Street", telephone:"147258",email:"contact@info.com"},
      {address:"Yellowstone Park", telephone:"369147",email:"contact@info.com"},
      {address:"Baker Street", telephone:"258369",email:"contact@info.com"},
      {address:"5th Avenue", telephone:"159753",email:"contact@info.com"},
      {address:"Palomino Street 30", telephone:"123456",email:"contact@info.com"},
      {address:"Menganito Street 15", telephone:"789123",email:"contact@info.com"},
      {address:"Fulanito Street 28", telephone:"456789",email:"contact@info.com"},
      {address:"Sesame Street", telephone:"147258",email:"contact@info.com"},
      {address:"Yellowstone Park", telephone:"369147",email:"contact@info.com"},
      {address:"Baker Street", telephone:"258369",email:"contact@info.com"},
      {address:"5th Avenue", telephone:"159753",email:"contact@info.com"},
      {address:"Palomino Street 30", telephone:"123456",email:"contact@info.com"},
      {address:"Menganito Street 15", telephone:"789123",email:"contact@info.com"},
      {address:"Fulanito Street 28", telephone:"456789",email:"contact@info.com"},
      {address:"Sesame Street", telephone:"147258",email:"contact@info.com"},
      {address:"Yellowstone Park", telephone:"369147",email:"contact@info.com"},
      {address:"Baker Street", telephone:"258369",email:"contact@info.com"},
      {address:"5th Avenue", telephone:"159753",email:"contact@info.com"}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contactInfos', null, {});
  }
};

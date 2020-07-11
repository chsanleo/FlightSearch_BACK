'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Airport', [{
        name: 'Aeroparque Jorge Newbery',
        smooking: true,
      },
      {
        name: 'Aeropuerto de Málaga-Costa del Sol',
        smooking: true,
      },
      {
        name: 'Aeropuerto de Ámsterdam-Schiphol',
        smooking: false,
      },
      {
        name: 'Aeropuerto Internacional Reina Beatrix',
        smooking: true,
      },
      {
        name: 'Aeropuerto de Barcelona-El Prat',
        smooking: false,
      },
      {
        name: 'Aeropuerto de Bamiyán',
        smooking: true,
      },
      {
        name: 'Aeropuerto Internacional El Dorado',
        smooking: false,
      },
      {
        name: 'Base Aérea de Beja',
        smooking: false,
      },
      {
        name: 'Aeropuerto Internacional de Maiquetía Simón Bolívar',
        smooking: true,
      },
      {
        name: 'Aeropuerto de París-Charles de Gaulle',
        smooking: true,
      },
      {
        name: 'Aeropuerto Internacional Mariscal Lamar',
        smooking: true,
      },
      {
        name: 'Aeropuerto Internacional James M. Cox-Dayton',
        smooking: false,
      },
      {
        name: 'Aeropuerto Internacional Hamad',
        smooking: false,
      },
      {
        name: 'Aeropuerto de Edimburgo',
        smooking: true,
      },
      {
        name: 'Aeropuerto Internacional de São Paulo-Guarulhos',
        smooking: true,
      },
      {
        name: 'Aeropuerto de Hannover',
        smooking: false,
      },
    ]);
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Airport', null, {});
    }
};
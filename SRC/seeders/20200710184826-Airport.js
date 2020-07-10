'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Airport', [{
        name: 'Aeroparque Jorge Newbery',
        smoking: true,
      },
      {
        name: 'Aeropuerto de Málaga-Costa del Sol',
        smoking: true,
      },
      {
        name: 'Aeropuerto de Ámsterdam-Schiphol',
        smoking: false,
      },
      {
        name: 'Aeropuerto Internacional Reina Beatrix',
        smoking: true,
      },
      {
        name: 'Aeropuerto de Barcelona-El Prat',
        smoking: false,
      },
      {
        name: 'Aeropuerto de Bamiyán',
        smoking: true,
      },
      {
        name: 'Aeropuerto Internacional El Dorado',
        smoking: false,
      },
      {
        name: 'Base Aérea de Beja',
        smoking: false,
      },
      {
        name: 'Aeropuerto Internacional de Maiquetía Simón Bolívar',
        smoking: true,
      },
      {
        name: 'Aeropuerto de París-Charles de Gaulle',
        smoking: true,
      },
      {
        name: 'Aeropuerto Internacional Mariscal Lamar',
        smoking: true,
      },
      {
        name: 'Aeropuerto Internacional James M. Cox-Dayton',
        smoking: false,
      },
      {
        name: 'Aeropuerto Internacional Hamad',
        smoking: false,
      },
      {
        name: 'Aeropuerto de Edimburgo',
        smoking: true,
      },
      {
        name: 'Aeropuerto Internacional de São Paulo-Guarulhos',
        smoking: true,
      },
      {
        name: 'Aeropuerto de Hannover',
        smoking: false,
      },
    ]);
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Airport', null, {});
    }
};
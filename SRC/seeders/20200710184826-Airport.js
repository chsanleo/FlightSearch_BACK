'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Airport', [{
        name: 'Aeroparque Jorge Newbery',
        smooking: true,
        ContactInfoId: 1,
        CountryId:11
      },
      {
        name: 'Aeropuerto de Málaga-Costa del Sol',
        smooking: true,
        ContactInfoId: 2,
        CountryId:212
      },
      {
        name: 'Aeropuerto de Ámsterdam-Schiphol',
        smooking: false,
        ContactInfoId: 3,
        CountryId:155
      },
      {
        name: 'Aeropuerto Internacional Reina Beatrix',
        smooking: true,
        ContactInfoId: 4,
        CountryId:155
      },
      {
        name: 'Aeropuerto de Barcelona-El Prat',
        smooking: false,
        ContactInfoId: 5,
        CountryId:212
      },
      {
        name: 'Aeropuerto de Bamiyán',
        smooking: true,
        ContactInfoId: 6,
        CountryId:1
      },
      {
        name: 'Aeropuerto Internacional El Dorado',
        smooking: false,
        ContactInfoId: 7,
        CountryId:49
      },
      {
        name: 'Base Aérea de Beja',
        smooking: false,
        ContactInfoId: 8,
        CountryId:178
      },
      {
        name: 'Aeropuerto Internacional de Maiquetía Simón Bolívar',
        smooking: true,
        ContactInfoId: 9,
        CountryId:245
      },
      {
        name: 'Aeropuerto de París-Charles de Gaulle',
        smooking: true,
        ContactInfoId: 10,
        CountryId:75
      },
      {
        name: 'Aeropuerto Internacional Mariscal Lamar',
        smooking: true,
        ContactInfoId: 11,
        CountryId:64
      },
      {
        name: 'Aeropuerto Internacional James M. Cox-Dayton',
        smooking: false,
        ContactInfoId: 12,
        CountryId:239
      },
      {
        name: 'Aeropuerto Internacional Hamad',
        smooking: false,
        ContactInfoId:13,
        CountryId:180
      },
      {
        name: 'Aeropuerto de Edimburgo',
        smooking: true,
        ContactInfoId:14,
        CountryId:238
      },
      {
        name: 'Aeropuerto Internacional de São Paulo-Guarulhos',
        smooking: true,
        ContactInfoId: 15,
        CountryId:31
      },
      {
        name: 'Aeropuerto de Hannover',
        smooking: false,
        ContactInfoId: 16,
        CountryId:82
      },
    ]);
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Airport', null, {});
    }
};
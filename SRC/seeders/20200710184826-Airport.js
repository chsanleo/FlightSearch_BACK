'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Airport', [{
      name: 'Aeroparque Jorge Newbery',
      smooking: true,
      ContactInfoId: 1,
      CountryId: 11,
      IataCodeId: 2
    },
    {
      name: 'Aeropuerto de Málaga-Costa del Sol',
      smooking: true,
      ContactInfoId: 2,
      CountryId: 212,
      IataCodeId: 4,
      companyManag:"Aena"
    },
    {
      name: 'Aeropuerto de Ámsterdam-Schiphol',
      smooking: false,
      ContactInfoId: 3,
      CountryId: 155,
      IataCodeId: 5
    },
    {
      name: 'Aeropuerto Internacional Reina Beatrix',
      smooking: true,
      ContactInfoId: 4,
      CountryId: 155,
      IataCodeId: 11
    },
    {
      name: 'Aeropuerto de Barcelona-El Prat',
      smooking: false,
      ContactInfoId: 5,
      CountryId: 212,
      IataCodeId: 12,
      companyManag:"Aena"
    },
    {
      name: 'Aeropuerto de Bamiyán',
      smooking: true,
      ContactInfoId: 6,
      CountryId: 1,
      IataCodeId: 13
    },
    {
      name: 'Aeropuerto Internacional El Dorado',
      smooking: false,
      ContactInfoId: 7,
      CountryId: 49,
      IataCodeId: 15
    },
    {
      name: 'Base Aérea de Beja',
      smooking: false,
      ContactInfoId: 8,
      CountryId: 178,
      IataCodeId: 21
    },
    {
      name: 'Aeropuerto Internacional de Maiquetía Simón Bolívar',
      smooking: true,
      ContactInfoId: 9,
      CountryId: 245,
      IataCodeId: 24
    },
    {
      name: 'Aeropuerto de París-Charles de Gaulle',
      smooking: true,
      ContactInfoId: 10,
      CountryId: 75,
      IataCodeId: 25
    },
    {
      name: 'Aeropuerto Internacional Mariscal Lamar',
      smooking: true,
      ContactInfoId: 11,
      CountryId: 64,
      IataCodeId: 32
    },
    {
      name: 'Aeropuerto Internacional James M. Cox-Dayton',
      smooking: false,
      ContactInfoId: 12,
      CountryId: 239,
      IataCodeId: 35
    },
    {
      name: 'Aeropuerto Internacional Hamad',
      smooking: false,
      ContactInfoId: 13,
      CountryId: 180,
      IataCodeId: 38
    },
    {
      name: 'Aeropuerto de Edimburgo',
      smooking: true,
      ContactInfoId: 14,
      CountryId: 238,
      IataCodeId: 41
    },
    {
      name: 'Aeropuerto Internacional de São Paulo-Guarulhos',
      smooking: true,
      ContactInfoId: 15,
      CountryId: 31,
      IataCodeId: 57
    },
    {
      name: 'Aeropuerto de Hannover',
      smooking: false,
      ContactInfoId: 16,
      CountryId: 82,
      IataCodeId: 62
    },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Airport', null, {});
  }
};
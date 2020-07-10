'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Company', [{
        name: 'VASCO'
      },
      {
        name: 'Branson Air Express'
      },
      {
        name: 'Angara Airlines'
      },
      {
        name: 'Star Peru'
      },
      {
        name: 'Air Burkina'
      },
      {
        name: 'Avianca'
      },
      {
        name: 'Maya Island Air'
      },
      {
        name: 'Albawings'
      },
      {
        name: 'Blue Air'
      },
      {
        name: 'Helvetic Airways'
      },
      {
        name: "Sun d'Or Airlines"
      },
      {
        name: 'Passaredo Linhas Aéreas'
      },
      {
        name: 'Binter Cabo Verde'
      },
      {
        name: 'Air Chathams'
      },
      {
        name: 'Air Choice One'
      },
      {
        name: 'Pacificair'
      },
      {
        name: 'Air Inuit'
      },
      {
        name: 'Jubba Airways'
      },
      {
        name: 'Silver Airways'
      },
      {
        name: 'Airline Urga'
      },
      {
        name: 'Air Philip'
      },
      {
        name: 'Avior Regional'
      },
      {
        name: 'Air Antilles'
      },
      {
        name: 'Tarco Aviation'
      },
      {
        name: 'Sichuan Airlines'
      },
      {
        name: 'Malawi Airlines'
      },
      {
        name: 'Boutique Air'
      },
      {
        name: 'Gazpromavia'
      },
      {
        name: 'FlyDamas'
      },
      {
        name: 'Kenn Borek Air'
      },
      {
        name: 'Airnorth'
      },
      {
        name: 'Star East Airlines'
      },
      {
        name: 'Warbelows Air'
      },
      {
        name: 'Airlink'
      },
      {
        name: 'Bassaka Air'
      },
      {
        name: 'Aeromexico Connect'
      },
      {
        name: 'FlyOne'
      },
      {
        name: 'FlyMontserrat'
      },
      {
        name: 'SmartAvia'
      },
      {
        name: 'ASL Airlines France'
      },
      {
        name: 'Rutaca Airlines'
      },
      {
        name: 'Canadian North'
      },
      {
        name: 'TAG Airlines'
      },
      {
        name: 'CemAir'
      },
      {
        name: 'TUI fly Nordic'
      },
      {
        name: 'Air Timor'
      },
      {
        name: 'Israir Airlines'
      },
      {
        name: 'Solaseed Air'
      },
      {
        name: 'Aklak Air'
      },
      {
        name: 'Niger Airlines'
      },
      {
        name: 'Orbest'
      },
      {
        name: 'Cham Wings Airlines'
      },
      {
        name: 'ALROSA'
      },
      {
        name: 'SaudiGulf'
      },
      {
        name: 'SmartLynx Airlines Estonia'
      },
      {
        name: 'Madagasikara Airways'
      },
      {
        name: 'Sylt Air'
      },
      {
        name: 'First Air'
      },
      {
        name: 'MAYAir'
      },
      {
        name: 'Air Panama'
      },
      {
        name: 'Elite Airways'
      },
      {
        name: 'RusLine'
      },
      {
        name: 'Federal Airlines'
      },
      {
        name: 'Mann Yadanarpon Airlines'
      },
      {
        name: 'TransNusa'
      },
      {
        name: 'Bering Air'
      },
      {
        name: 'STP Airways'
      },
      {
        name: 'Fly Mid Africa'
      },
      {
        name: 'BHAir'
      },
      {
        name: 'EcoJet'
      },
      {
        name: 'Myanmar Airways International'
      },
      {
        name: 'Regional Air'
      },
      {
        name: 'Pacific Coastal Airlines'
      },
      {
        name: 'Air Tindi'
      },
      {
        name: 'Afriqiyah Airways'
      },
      {
        name: 'EWA Air'
      },
      {
        name: 'LATAM Colombia'
      },
      {
        name: 'PAL Express'
      },
      {
        name: 'Jetstar Asia'
      },
      {
        name: 'Air Arabia Maroc'
      },
      {
        name: 'Fly540'
      },
      {
        name: 'Indigo'
      },
      {
        name: 'Jeju Air'
      },
      {
        name: 'Lucky Air'
      },
      {
        name: 'StarFlyer'
      },
      {
        name: 'TruJet'
      },
      {
        name: 'Ravn Alaska'
      },
      {
        name: 'Eurowings'
      },
      {
        name: 'Onur Air'
      },
      {
        name: 'Interjet'
      },
      {
        name: 'Wright Air Service'
      },
      {
        name: 'Fly All Ways'
      },
      {
        name: 'Pan Pacific Airlines'
      },
      {
        name: 'Congo Airways'
      },
      {
        name: 'Air Changan'
      },
      {
        name: 'Dana Air'
      },
      {
        name: 'Cape Air'
      },
      {
        name: 'Central Mountain Air'
      },
      {
        name: 'Tropic Air'
      },
      {
        name: 'Caicos Express Airways'
      },
      {
        name: 'SATENA'
      },
      {
        name: 'Air Moldova'
      },
      {
        name: 'Avior Airlines'
      },
      {
        name: 'Jet Airways'
      },
      {
        name: 'Southern Airways Express'
      },
    ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Company', null, {});
    }
};
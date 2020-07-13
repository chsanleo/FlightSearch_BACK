'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      takeOffDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      landingDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      LandingAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      TakeOffAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      PlaneId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      CurrencyId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      CompanyId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Flights');
  }
};
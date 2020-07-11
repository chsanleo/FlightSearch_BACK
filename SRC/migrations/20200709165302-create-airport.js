'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Airport', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      companyManag: {
        type: Sequelize.STRING
      },
      smooking: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      CountryId: {
        type:Sequelize.INTEGER,
        allowNull: false,
      },
      ContactInfoId: {
        type:Sequelize.INTEGER
      },
      IataCodeId: {
        type:Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Airport');
  }
};
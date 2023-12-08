'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Car', {
      licencePlate: {
        type: Sequelize.TEXT,
        primaryKey: true,
      },
      model: {
        type: Sequelize.TEXT,
      },
      manufacture: {
        type: Sequelize.TEXT,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      SIInfo: {
        type: Sequelize.TEXT,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Car');
  }
};
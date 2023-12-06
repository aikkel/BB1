'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Car', {
      carID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      licencePlate: Sequelize.TEXT,
      model: Sequelize.TEXT,
      manufacture: Sequelize.TEXT,
      year: Sequelize.INTEGER,
      SIInfo: Sequelize.TEXT
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Car');
  }
};
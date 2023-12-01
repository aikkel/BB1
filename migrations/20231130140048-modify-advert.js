'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Advert', {
      advertID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      licencePlate: {
        type: Sequelize.TEXT,
        references: {
          model: 'Car',
          key: 'licencePlate'
        },
      },
      description: Sequelize.TEXT, 
      model: Sequelize.TEXT,       
      manufacture: Sequelize.TEXT, 
      year: Sequelize.INTEGER,
      price: Sequelize.INTEGER,
      picture: Sequelize.TEXT       // Assuming picture is a URL or file path
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Advert');
  }
};

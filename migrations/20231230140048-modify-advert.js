'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Advert', {
      advertID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      licencePlate: {
        type: Sequelize.TEXT,
        references: {
          model: 'Car',
          key: 'licencePlate'
        }
      },
      description: {
        type: Sequelize.TEXT
      },
      model: {
        type: Sequelize.TEXT
      },
      manufacture: {
        type: Sequelize.TEXT
      },
      year: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      picture: {
        type: Sequelize.TEXT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Advert');
  }
};
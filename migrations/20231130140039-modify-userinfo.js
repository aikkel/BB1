'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserInfo', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }
    });

    await queryInterface.addColumn('UserInfo', 'userRefID', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'ID'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('UserInfo', 'userRefID');
    await queryInterface.dropTable('UserInfo');
  }
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('User', [{
        email: 'example@example.com',
        password: 'password', // normally hashing this the way.
      }], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('User', null, {});
      }
};
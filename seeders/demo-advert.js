'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Advert', [{
        licensePlate: 'AB12345',
        description: 'This is a test advert',
        model: 'Model Y',
        manufacture: 'Tesla',
        year: 2020,
        price: 1000000,
      }], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Advert', null, {});
      }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
      // Insert cars
      await queryInterface.bulkInsert('Car', [{
        licencePlate: 'ABC123',
        model: 'Corolla',
        manufacture: 'Toyota',
        year: 2020,
        // Add other fields as necessary
      }, {
        licencePlate: 'DEF456',
        model: 'Civic',
        manufacture: 'Honda',
        year: 2020,
        // Add other fields as necessary
      }], {});

      // Insert adverts
      await queryInterface.bulkInsert('Advert', [{
        licencePlate: 'ABC123',
        description: 'A great car',
        model: 'Corolla',
        manufacture: 'Toyota',
        year: 2020,
        price: 20000,
        // Add other fields as necessary
      }, {
        licencePlate: 'DEF456',
        description: 'An excellent car',
        model: 'Civic',
        manufacture: 'Honda',
        year: 2019,
        price: 18000,
        // Add other fields as necessary
      }], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Advert', null, {});
        await queryInterface.bulkDelete('Car', null, {});
    }
};
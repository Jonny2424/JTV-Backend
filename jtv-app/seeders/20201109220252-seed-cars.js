'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cars', [
      {
        carYear: 2020,
        carMake: 'Honda',
        carModel: 'Civic Type R',
        userId: 1 
      },
      {
        carYear: 1985,
        carMake: 'Toyota',
        carModel: 'Corolla',
        userId: 2 
      },
      {
        carYear: 2010,
        carMake: 'BMW',
        carModel: 'M3',
        userId: 3 
      }
    ], {});
  },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Cars', null, {});
    }
};

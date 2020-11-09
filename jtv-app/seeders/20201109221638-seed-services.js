'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [
      {
        serviceType: 'Wash',
        serviceCost: 100
      },
      {
        serviceType: 'Wax',
        serviceCost: 50
      },
      {
        serviceType: 'Paint Correct',
        serviceCost: 500
      }
    ], {});
  },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Services', null, {});
    }
};

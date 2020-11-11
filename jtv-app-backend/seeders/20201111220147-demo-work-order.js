'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Work_Orders', [
      {
        work_order_paid_amount: 50,
        customerId: 1,
        workTypeId: 1,
        workStatusId: 1
      },
      {
        work_order_paid_amount: 100,
        customerId: 2,
        workTypeId: 2,
        workStatusId: 2
      },
      {
        work_order_paid_amount: 200,
        customerId: 3,
        workTypeId: 3,
        workStatusId: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Work_Orders', null, {});
  }
};

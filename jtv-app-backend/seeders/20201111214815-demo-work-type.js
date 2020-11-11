'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Work_Types', [
      {
        work_type_description: "bronze",
        work_type_cost: 100
      },
      {
        work_type_description: "silver",
        work_type_cost: 150
      },
      {
        work_type_description: "gold",
        work_type_cost: 200
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Work_Types', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Work_Statuses', [
      {
        work_status_description: "assigned"
      },
      {
        work_status_description: "completed"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Work_Statuses', null, {});
  }
};

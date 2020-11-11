'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Request_Statuses', [
      {
        request_status_description: "submitted"
      },
      {
        request_status_description: "booked"
      },
      {
        request_status_description: "info sent"
      },
      {
        request_status_description: "denied"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Request_Statuses', null, {});
  }
};

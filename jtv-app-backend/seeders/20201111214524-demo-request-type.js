'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Request_Types', [
      {
        request_type_description: "request work"
      },
      {
        request_type_description: "request info"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Request_Types', null, {});
  }
};

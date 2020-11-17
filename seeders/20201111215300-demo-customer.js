'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [
      {
        fname: "Jon",
        lname: "Vaflor",
        email: "jtv2610@gmail.com",
        phone: "222-222-2222"
      },
      {
        fname: "Joe",
        lname: "Smith",
        email: "JSmith@gmail.com",
        phone: "333-333-3333"
      },
      {
        fname: "Jane",
        lname: "Doe",
        email: "JDoe@gmail.com",
        phone: "444-444-4444"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};

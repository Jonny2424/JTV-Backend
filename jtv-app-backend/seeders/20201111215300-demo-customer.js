'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [
      {
        customer_Fname: "Jon",
        customer_Lname: "Vaflor",
        customer_email: "jtv2610@gmail.com",
        customer_phone: "222-222-2222"
      },
      {
        customer_Fname: "Joe",
        customer_Lname: "Smith",
        customer_email: "JSmith@gmail.com",
        customer_phone: "333-333-3333"
      },
      {
        customer_Fname: "Jane",
        customer_Lname: "Doe",
        customer_email: "JDoe@gmail.com",
        customer_phone: "444-444-4444"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};

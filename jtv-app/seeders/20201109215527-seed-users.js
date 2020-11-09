'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName:'John',
        lastName:'Smith',
        userEmail: 'JSmith@gmail.com',
        userPhone: '563-291-1198',
        userMsg: 'Need a wash'
      },
      {
        firstName:'Jane',
        lastName:'Doe',
        userEmail: 'JDoe@gmail.com',
        userPhone: '569-611-1100',
        userMsg: 'Have some stains on the seat'
      },
      {
        firstName:'Casey',
        lastName:'Harding',
        userEmail: 'CHarding@gmail.com',
        userPhone: '563-291-5555',
        userMsg: 'I have some scratches'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

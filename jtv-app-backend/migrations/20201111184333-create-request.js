'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      request_Fname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      request_Lname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      request_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      request_msg: {
        type: Sequelize.STRING
      },
      request_car_year: {
        type: Sequelize.INTEGER
      },
      request_car_make: {
        type: Sequelize.STRING
      },
      request_car_model: {
        type: Sequelize.STRING
      },
      requestStatusId: {
        type: Sequelize.INTEGER
      },
      requestTypeId: {
        type: Sequelize.INTEGER
      },
      workTypeId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,

      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Requests');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('requests', {
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
      request_date: {
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
      created_at: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATEONLY,
      },
      updated_at: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATEONLY
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('requests');
  }
};
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
      requestFname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      requestLname: {
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
      request_status_id: {
        type: Sequelize.INTEGER
      },
      request_type_id: {
        type: Sequelize.INTEGER
      },
      work_type_id: {
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
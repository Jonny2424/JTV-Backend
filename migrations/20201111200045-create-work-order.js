'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Work_Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      work_order_paid_amount: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      workTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      workStatusId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Work_Orders');
  }
};
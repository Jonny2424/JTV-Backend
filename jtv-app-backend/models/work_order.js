'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work_Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Work_Order.belongsTo(models.Work_Type, { foreignKey: "workTypeId" })
      Work_Order.belongsTo(models.Work_Status, { foreignKey: "workStatusId"})
      Work_Order.belongsTo(models.Customer, { foreignKey: "customerId"})
    }
  };
  Work_Order.init({
    work_order_paid_amount: DataTypes.INTEGER,
    workTypeId: DataTypes.INTEGER,
    workStatusId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'Work_Order',
  });
  return Work_Order;
};
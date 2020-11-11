'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer_Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer_Car.belongsTo(models.Customer, { foreignKey: "customerId"})
    }
  };
  Customer_Car.init({
    customer_car_year: DataTypes.INTEGER,
    customer_car_make: DataTypes.STRING,
    customer_car_model: DataTypes.STRING,
    customerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer_Car',
  });
  return Customer_Car;
};
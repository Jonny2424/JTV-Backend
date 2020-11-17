'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasMany(models.Work_Order, {foreignKey: "customerId"})
      Customer.hasMany(models.Customer_Car, { foreignKey: "customerId"})
    }
  };
  Customer.init({
    customer_Fname: DataTypes.STRING,
    customer_Lname: DataTypes.STRING,
    customer_email: DataTypes.STRING,
    customer_phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};
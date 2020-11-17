'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customer_Cars', [
      {
        customerId: 1,
        customer_car_year: 1990,
        customer_car_make: "Honda",
        customer_car_model: "Prelude"
      },
      {
        customerId: 1,
        customer_car_year: 2008,
        customer_car_make: "Toyota",
        customer_car_model: "FJ Cruiser"
      },
      {
        customerId: 2,
        customer_car_year: 2004,
        customer_car_make: "Dodge",
        customer_car_model: "Viper"
      },
      {
        customerId: 3,
        customer_car_year: 2020,
        customer_car_make: "Tesla",
        customer_car_model: "Model 3"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customer_Cars', null, {});
  }
};

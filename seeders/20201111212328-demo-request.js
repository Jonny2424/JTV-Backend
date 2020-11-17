'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Requests', [
      {
        request_fname: "Jon",
        request_lname: "Vaflor",
        request_email: "jtv2610@gmail.com",
        request_msg: "Need a wash",
        request_car_year: 1998,
        request_car_make: "Honda",
        request_car_model: "Prelude",
        request_date: "11-15-2020",
        request_status_id: 1,
        request_type_id: 1,
        work_type_id: 1
      },
      {
        request_fname: "Joe",
        request_lname: "Smith",
        request_email: "JSmith@gmail.com",
        request_msg: "make my car shiny",
        request_car_year: 2005,
        request_car_make: "Mercury",
        request_car_model: "Cougar",
        request_date: "11-16-2020",
        request_status_id: 1,
        request_type_id: 1,
        work_type_id: 1
      },
      {
        request_fname: "Jane",
        request_lname: "Doe",
        request_email: "JDoe@gmail.com",
        request_msg: "Fix these scratches",
        request_car_year: 2020,
        request_car_make: "Toyota",
        request_car_model: "Supra",
        request_date: "11-17-2020",
        request_status_id: 1,
        request_type_id: 1,
        work_type_id: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Requests', null, {});
  }
};

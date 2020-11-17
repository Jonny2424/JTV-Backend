'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('requests', [
      {
        fname: "Jon",
        lname: "Vaflor",
        email: "jtv2610@gmail.com",
        msg: "Need a wash",
        car_year: 1998,
        car_make: "Honda",
        car_model: "Prelude",
        date: "11-15-2020",
        status_id: 1,
        type_id: 1,
        work_type_id: 1
      },
      {
        fname: "Joe",
        lname: "Smith",
        email: "JSmith@gmail.com",
        msg: "make my car shiny",
        car_year: 2005,
        car_make: "Mercury",
        car_model: "Cougar",
        date: "11-16-2020",
        status_id: 1,
        type_id: 1,
        work_type_id: 1
      },
      {
        fname: "Jane",
        lname: "Doe",
        email: "JDoe@gmail.com",
        msg: "Fix these scratches",
        car_year: 2020,
        car_make: "Toyota",
        car_model: "Supra",
        date: "11-17-2020",
        status_id: 1,
        type_id: 1,
        work_type_id: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('requests', null, {});
  }
};

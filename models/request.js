'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Request.belongsTo(models.Request_Status, {foreignKey: "requestStatusId"})
      Request.belongsTo(models.Request_Type, {foreignKey: "requestTypeId"})
      Request.belongsTo(models.Work_Type, {foreignKey: "workTypeId"})
    }
  };
  Request.init({
    request_Fname: DataTypes.STRING,
    request_Lname: DataTypes.STRING,
    request_email: DataTypes.STRING,
    request_msg: DataTypes.STRING,
    request_car_year: DataTypes.INTEGER,
    request_car_make: DataTypes.STRING,
    request_car_model: DataTypes.STRING,
    request_date: DataTypes.STRING,
    requestStatusId: DataTypes.INTEGER,
    requestTypeId: DataTypes.INTEGER,
    workTypeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};
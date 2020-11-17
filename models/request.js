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
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    msg: DataTypes.STRING,
    car_year: DataTypes.INTEGER,
    car_make: DataTypes.STRING,
    car_model: DataTypes.STRING,
    date: DataTypes.STRING,
    statusId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    work_type_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};
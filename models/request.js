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
      Request.belongsTo(models.Request_Status, {foreignKey: "status_id"})
      Request.belongsTo(models.Request_Type, {foreignKey: "type_id"})
      Request.belongsTo(models.Work_Type, {foreignKey: "work_type_id"})
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
    status_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    work_type_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};
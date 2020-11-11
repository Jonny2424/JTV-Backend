'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work_Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Work_Status.hasMany(models.Work_Order, {foreignKey: "workOrderId"})
    }
  };
  Work_Status.init({
    work_status_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Work_Status',
  });
  return Work_Status;
};
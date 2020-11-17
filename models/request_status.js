'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request_Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Request_Status.hasMany(models.Request, {foreignKey: "requestStatusId"})
    }
  };
  Request_Status.init({
    request_status_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Request_Status',
  });
  return Request_Status;
};
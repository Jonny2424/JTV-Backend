'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Request_Type.hasMany(models.Request, {foreignKey: "type_id"})
    }
  };
  Request_Type.init({
    request_type_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Request_Type',
  });
  return Request_Type;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Work_Type.hasMany(models.Request, {foreignKey: "workTypeId"})
      Work_Type.hasMany(models.Work_Order, {foreignKey: "workTypeId"})
    }
  };
  Work_Type.init({
    work_type_description: DataTypes.STRING,
    work_type_cost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Work_Type',
  });
  return Work_Type;
};
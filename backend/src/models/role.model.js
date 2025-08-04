'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role.model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  role.model.init({
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'role.model',
  });
  return role.model;
};
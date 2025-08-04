'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Person.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    profession: DataTypes.STRING,
    description: DataTypes.TEXT,
    country: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
    phone: DataTypes.STRING,
    profilePictureUrl: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};
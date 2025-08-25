"use strict";

const { Model } = require("sequelize");
const { v4: uuidv4 } = require('uuid'); // Asegúrate de instalar uuid: npm install uuid

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Education, {
        foreignKey: "personId",
        as: "educations",
      });
    }
  }
  Person.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Esto genera automáticamente un UUID
        primaryKey: true,
        allowNull: false,
      },
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
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      //modelName: "Person",
      tableName: "persons",
      onDelete: "CASCADE",
      paranoid: true,
      timestamps: true,
    }
  );
  return Person;
};

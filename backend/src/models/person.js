"use strict";
1;
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Education, {
        foreignKey: "personId",
        as: "educations",
      });
      Person.hasMany(models.Project, {
        foreignKey: "personId",
        as: "projects",
      });
      Person.hasMany(models.Skill, {
        foreignKey: "personId",
        as: "skills",
      });
      Person.hasMany(models.Experience, {
        foreignKey: "personId",
        as: "experiences",
      });
      Person.hasMany(models.socialMedia, {
        foreignKey: "personId",
        as: "socialMedia",
      });
      Person.belongsToMany(models.personRole, {
        foreignKey: "personId",
        as: "personRoles",
      });
    }
  }
  Person.init(
    {
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
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Person",
      onDelete: "CASCADE",
      paranoid: true,
    }
  );
  return Person;
};

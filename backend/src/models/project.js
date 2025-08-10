"use strict";
const { Model, UUID } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsTo(models.Person, {
        foreignKey: "personId",
        as: "persons",
      });
      Project.hasMany(models.projectImage, {
        foreignKey: "projectId",
        as: "projectImages",
      });
    }
  }
  Project.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      startDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
      projectUrl: DataTypes.STRING,
      repositoryUrl: DataTypes.STRING,
      personId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};

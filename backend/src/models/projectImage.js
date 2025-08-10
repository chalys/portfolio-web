"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectImage extends Model {
    static associate(models) {
      ProjectImage.belongsTo(models.Project, {
        foreignKey: "projectId",
        as: "projects",
      });
    }
  }
  ProjectImage.init(
    {
      imageUrl: DataTypes.STRING,
      caption: DataTypes.TEXT,
      isPrimary: DataTypes.BOOLEAN,
      projectId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "ProjectImage",
    }
  );
  return ProjectImage;
};

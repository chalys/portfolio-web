"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    static associate(models) {
      Education.belongsTo(models.Person, {
        foreignKey: "personId",
        as: "persons",
      });
    }
  }
  Education.init(
    {
      institutionName: DataTypes.STRING,
      degree: DataTypes.STRING,
      fieldOfStudy: DataTypes.STRING,
      startDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
      description: DataTypes.TEXT,
      institutionLogoUrl: DataTypes.STRING,
      personId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Education",
      timestamps: false,
      onDelete: "CASCADE",
    }
  );
  return Education;
};

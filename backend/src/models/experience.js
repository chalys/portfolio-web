"use strict";
const { Model, UUID } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    static associate(models) {
      Experience.belongsTo(models.Person, {
        foreignKey: "personId",
        as: "persons",
      });
    }
  }
  Experience.init(
    {
      companyName: DataTypes.STRING,
      position: DataTypes.STRING,
      startDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
      description: DataTypes.TEXT,
      companyLogoUrl: DataTypes.STRING,
      personId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Experience",
    }
  );
  return Experience;
};

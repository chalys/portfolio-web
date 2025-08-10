"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate(models) {
      Skill.belongsTo(models.Person, {
        foreignKey: "personId",
        as: "persons",
      });
    }
  }
  Skill.init(
    {
      skillName: DataTypes.STRING,
      level: DataTypes.STRING,
      skillType: DataTypes.STRING,
      skillLogoUrl: DataTypes.STRING,
      personId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Skill",
    }
  );
  return Skill;
};

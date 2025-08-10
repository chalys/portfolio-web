"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PersonRole extends Model {
    static associate(models) {
      PersonRole.belongsTo(models.Person, {
        foreignKey: "personId",
        as: "persons",
      });
      PersonRole.belongsTo(models.Role, {
        foreignKey: "roleId",
        as: "roles",
      });
    }
  }
  PersonRole.init(
    {
      startDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
      personId: DataTypes.UUID,
      roleId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "PersonRole",
    }
  );
  return PersonRole;
};

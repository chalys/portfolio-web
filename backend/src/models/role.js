"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.personRole, {
        foreignKey: "roleId",
        as: "personRoles",
      });
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Role",
    }
  );
  return Role;
};

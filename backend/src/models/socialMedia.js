"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SocialMedia extends Model {
    static associate(models) {
      SocialMedia.belongsTo(models.Person, {
        foreignKey: "personId",
        as: "persons",
      });
    }
  }
  SocialMedia.init(
    {
      platformName: DataTypes.STRING,
      profileUrl: DataTypes.STRING,
      personId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "SocialMedia",
    }
  );
  return SocialMedia;
};

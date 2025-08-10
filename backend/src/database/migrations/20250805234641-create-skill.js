"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("skills", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      skillName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      level: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      skillType: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      skillLogoUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      personId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "persons",
          },
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("skills");
  },
};

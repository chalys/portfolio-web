"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("projectImages", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      caption: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      isPrimary: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      projectId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "projects",
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
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("projectImages");
  },
};

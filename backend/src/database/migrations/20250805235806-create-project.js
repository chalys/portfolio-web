"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("projects", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      endDate: {
        allowNull: true,
        type: Sequelize.DATEONLY,
      },
      projectUrl: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      repositoryUrl: {
        allowNull: true,
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
    await queryInterface.dropTable("projects");
  },
};

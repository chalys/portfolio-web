"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("educations", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      institutionName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      degree: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      fieldOfStudy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      endDate: {
        allowNull: true,
        type: Sequelize.DATEONLY,
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      institutionLogoUrl: {
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
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("educations");
  },
};

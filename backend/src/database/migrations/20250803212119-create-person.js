"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Persons", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      profession: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birthDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      profilePictureUrl: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      enabled: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Persons");
  },
};

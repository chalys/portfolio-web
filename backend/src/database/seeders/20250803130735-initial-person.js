"use strict";
const personJSON = require("./data/persons.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Persons", personJSON, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Persons", null, {});
  },
};

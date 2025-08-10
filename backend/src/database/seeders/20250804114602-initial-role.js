"use strict";
const roleJSON = require("./data/roles.json");

const roleDBMapped = roleJSON.map((role) => {
  return {
    id: role.id,
    name: role.name,
    description: role.description,
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("roles", roleJSON, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};

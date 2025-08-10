"use strict";
const { v4: uuidv4 } = require("uuid");
const personJSON = require("./data/persons.json");
const roleJSON = require("./data/roles.json");

const personRoleDBMapped = personJSON.map((person) => {
  const roleFind = roleJSON.find((role) => {
    return role.name === person.role;
  });
  return {
    id: uuidv4(),
    personId: person.id,
    roleId: roleFind.id,
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("personRoles", personRoleDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("personRoles", null, {});
  },
};

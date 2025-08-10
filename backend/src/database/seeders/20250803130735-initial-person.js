"use strict";
const personJSON = require("./data/persons.json");

const personDBMapped = personJSON.map((person) => {
  return {
    id: person.id,
    firstName: person.firstName,
    lastName: person.lastName,
    profession: person.profession,
    description: person.description,
    country: person.country,
    birthDate: person.birthDate,
    phone: person.phone,
    profilePictureUrl: person.profilePictureUrl,
    username: person.username,
    email: person.email,
    password: person.password,
    enabled: person.enabled,
  };
});
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("persons", personDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("persons", null, {});
  },
};

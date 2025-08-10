"use strict";
const { v4: uuidv4 } = require("uuid");
const personJSON = require("./data/persons.json");
const experienceDBMapped = personJSON
  .map((person) => {
    const experience = person.experience.map((e) => {
      return {
        id: uuidv4(),
        companyName: e.companyName,
        position: e.position,
        startDate: e.startDate,
        endDate: e.endDate,
        description: e.description,
        companyLogoUrl: e.companyLogoUrl,
        personId: person ? person.id : null,
      };
    });
    return experience;
  })
  .flat(1);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("experiences", experienceDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("experiences", null, {});
  },
};

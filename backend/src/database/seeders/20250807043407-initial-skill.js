"use strict";
const { v4: uuidv4 } = require("uuid");
const personJSON = require("./data/persons.json");
const skillDBMapped = personJSON.map((person) => {
    const skill = person.skill.map((s) => {
      return {
        id: uuidv4(),
        skillName: s.skillName,
        level: s.level,
        skillType: s.skillType,
        skillLogoUrl: s.skillLogoUrl,
        personId: person ? person.id : null,
      };
    });
    return skill;
  })
  .flat(1);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("skills", skillDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("skills", null, {});
  },
};

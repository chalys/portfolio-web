"use strict";
const { v4: uuidv4 } = require('uuid');
const personJSON = require("./data/persons.json");

const educationDBMapped = personJSON.map((person) => {
  const education = person.education.map((e) => {
    return {
      id: uuidv4(),
      institutionName: e.institutionName,
      degree: e.degree,
      fieldOfStudy: e.fieldOfStudy,
      startDate: e.startDate,
      endDate: e.endDate,
      description: e.description,
      institutionLogoUrl: e.institutionLogoUrl,
      personId: person ? person.id : null,
    };
  });
  return education
}).flat(1);

/** @type {import('sequelize-cli').Migration} */ 
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("educations", educationDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("educations", null, {});
  },
};

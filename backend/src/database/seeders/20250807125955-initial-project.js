"use strict";
const { v4: uuidv4 } = require("uuid");
const personJSON = require("./data/persons.json");

const projectDBMapped = personJSON.map((person) => {
    const project = person.project.map((proj) => {
      return {
        id: uuidv4(),
        title: proj.title,
        description: proj.description,
        startDate: proj.startDate,
        endDate: proj.endDate,
        projectUrl: proj.projectUrl,
        repositoryUrl: proj.repositoryUrl,
        personId: person ? person.id : null,
      };
    });
    return project;
  })
  .flat(1);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("projects", projectDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("projects", null, {});
  },
};

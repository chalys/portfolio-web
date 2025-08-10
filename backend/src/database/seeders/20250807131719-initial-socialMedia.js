"use strict";
const { v4: uuidv4 } = require("uuid");
const personJSON = require("./data/persons.json");

const socialMediaDBMapped = personJSON
  .map((person) => {
    const socialMedia = person.socialMedia.map((sm) => {
      return {
        id: uuidv4(),
        platformName: sm.platformName,
        profileUrl: sm.profileUrl,
        personId: person ? person.id : null,
      };
    });
    return socialMedia;
  })
  .flat(1);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("socialMedia", socialMediaDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("socialMedia", null, {});
  },
};

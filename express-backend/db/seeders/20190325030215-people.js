"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "people",
      [
        {
          first_name: "Usman",
          last_name: "Bashir",
          created_at: new Date(),
          updated_at: new Date(),
          username: "usman",
          password: "123456"
        },
        {
          first_name: "Michael",
          last_name: "Finneran",
          created_at: new Date(),
          updated_at: new Date(),
          username: "michael",
          password: "123456"
        },
        {
          first_name: "Ghadeer",
          last_name: "Alkhathlan",
          created_at: new Date(),
          updated_at: new Date(),
          username: "ghadeer",
          password: "123456"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("people", null, {});
  }
};

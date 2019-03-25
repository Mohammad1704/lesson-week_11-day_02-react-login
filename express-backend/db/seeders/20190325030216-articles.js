"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "articles",
      [
        {
          title: "Hello World!",
          content: "This is a test article.",
          created_at: new Date(),
          updated_at: new Date(),
          person_id: 1
        },
        {
          title: "HOLA World!",
          content: "This is a test article.",
          created_at: new Date(),
          updated_at: new Date(),
          person_id: 2
        },
        {
          title: "SALAAM World!",
          content: "This is a test article.",
          created_at: new Date(),
          updated_at: new Date(),
          person_id: 3
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("articles", null, {});
  }
};

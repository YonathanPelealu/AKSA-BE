'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('author', [[
      {
          Name: "Yonathan",
          Age: 35,
          Description: "lorem ipsum",
      },
      {
          Name: "Andika",
          Age: 22,
          Description: "lorem ipsum",
      },
      {
          "id": "cfbbf637-c953-4eee-b59e-217088a0db37",
          Name: "Yon",
          Age: 25,
          Description: "lorem ipsum"
      },
      {
          Name: "Dika",
          Age: 28,
          Description: "lorem ipsum",
      },
      {
          Name: "Andi",
          Age: 30,
          Description: "lorem ipsum",
      }
  ]], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

let data = require(`../Data/Users/users.json`)

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    data = data.map((element)=>{

      element.createdAt = new Date ()
      element.updatedAt = new Date ()
      return element
    })
    return  queryInterface.bulkInsert(`Users`, data, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return  queryInterface.bulkDelete(`Users`, null, {})
  }
};

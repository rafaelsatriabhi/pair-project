'use strict';

let data = require(`../Data/Movies/movies.json`)

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
    return {
      name: element.name,
      year: element.year,
      runtime: element.runtime,
      categories: element.categories,
      release_date: element.release_date,
      createdAt: new Date (),
      updatedAt: new Date ()
    }

    
   })
   return queryInterface.bulkInsert(`Movies`, data, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(`Movies`, null, {})
  }
};

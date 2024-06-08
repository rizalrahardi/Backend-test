'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Borrowings', [
      {
        memberId: 1,
        bookId: 1,
        borrowing_date: new Date(),
        return_date: new Date(),
        return_status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberId: 2,
        bookId: 2,
        borrowing_date: new Date(),
        return_date: new Date(),
        return_status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberId: 1,
        bookId: 2,
        borrowing_date: new Date(),
        return_status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const records = [{
      name: '午餐',
      date: '2019-4-23',
      amount: 60,
      userId: 1,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: '晚餐',
      date: '2019-4-23',
      amount: 60,
      userId: 1,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: '捷運',
      date: '2019-4-23',
      amount: 120,
      userId: 1,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: '電影:驚奇隊長',
      date: '2019-4-23',
      amount: 220,
      userId: 2,
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: '租金',
      date: '2015-4-01',
      amount: 25000,
      userId: 1,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('Records', records)
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

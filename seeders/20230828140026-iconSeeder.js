'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const icons = [{
      name: '家居樂業',
      icon: 'fa-solid fa-house',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: '交通出行',
      icon: 'fa-solid fa-van-shuttle',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: '休閒娛樂',
      icon: 'fa-solid fa-face-grin-beam',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: '餐飲食品',
      icon: 'fa-solid fa-utensils',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: '其他',
      icon: 'fa-solid fa-pen',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    await queryInterface.bulkInsert('Categories', icons)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null)
  }
};

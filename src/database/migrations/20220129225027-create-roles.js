'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('roles', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('roles');
  }
};

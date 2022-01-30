'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('user_roles', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      roleId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'roles',
          key: 'id',
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key: 'id',
        }
      }
    });
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('user_roles');
  }
};

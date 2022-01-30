'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('posts', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                unique: true,
                primaryKey: true,
            },
            title: {
                type: Sequelize.STRING,
                // allowNull: false,
                unique: true
            },
            content: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                }
            }
        });
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('posts');
    }
};

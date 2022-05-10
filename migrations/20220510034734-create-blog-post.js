'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        reference: { model: 'User', key: 'id' }
      },
      published: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};

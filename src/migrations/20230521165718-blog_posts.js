'use strict'; //requisito 1

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const blogPosts = queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
        model: 'users',
        key: 'id'
        }
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    return blogPosts;
  },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('blog_posts');
    },  
};

'use strict'; //requisito 1

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categorias = queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    return categorias;
  },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('categories');
    },  
};

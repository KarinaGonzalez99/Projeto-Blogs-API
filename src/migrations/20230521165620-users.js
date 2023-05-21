'use strict'; //requisito 1

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usuario = queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      display_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
    });
    return usuario;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },  
};

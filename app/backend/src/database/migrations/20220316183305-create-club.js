'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('clubs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      club_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    queryInterface.dropTable('clubs');
  }
};

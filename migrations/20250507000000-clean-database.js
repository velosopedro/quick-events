'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Primeiro, remover todas as tabelas existentes
    await queryInterface.dropAllTables();
  },

  async down(queryInterface, Sequelize) {
    // Não precisamos fazer nada no down
  }
}; 
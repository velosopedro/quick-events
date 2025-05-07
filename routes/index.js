// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',  // Caminho para o banco de dados SQLite
});

const Evento = require('./evento')(sequelize, DataTypes);  // Aqui estamos passando sequelize e DataTypes para o modelo

// Exportando o sequelize (conexão) e os modelos
module.exports = { sequelize, Evento };

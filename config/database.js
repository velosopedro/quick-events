// config/database.js
require('dotenv').config();
const path = require('path');

module.exports = {
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite'),
  logging: console.log,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
};
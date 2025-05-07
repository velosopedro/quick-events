require('dotenv').config();
const { Sequelize } = require('sequelize');

const config = {
  dialect: 'sqlite',
  storage: process.env.NODE_ENV === 'test' 
    ? ':memory:'
    : './database.sqlite',
  logging: console.log,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};

const sequelize = new Sequelize(config);

module.exports = sequelize; 
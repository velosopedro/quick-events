const { Sequelize } = require('sequelize');
const path = require('path');
const config = require('../config/database');

const sequelize = new Sequelize(config);

const Evento = require('./evento')(sequelize, Sequelize.DataTypes);

const db = {
  sequelize,
  Evento
};

module.exports = db;
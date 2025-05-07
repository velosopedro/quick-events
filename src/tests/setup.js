require('dotenv').config();
const sequelize = require('../config/database');

process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test_secret';

// Configuração global do Jest
jest.setTimeout(10000); // Aumenta o timeout para 10 segundos

module.exports = sequelize; 
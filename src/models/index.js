const fs = require('fs');
const path = require('path');
const sequelize = require('../config/database');

const db = {};

// Carrega todos os modelos
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize);
    db[model.name] = model;
  });

// Configura as associações
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Adiciona o sequelize ao objeto db
db.sequelize = sequelize;

// Sincroniza o banco de dados
if (process.env.NODE_ENV !== 'test') {
  sequelize.sync();
}

module.exports = db; 
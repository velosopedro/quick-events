// models/evento.js
module.exports = (sequelize, DataTypes) => {
  const Evento = sequelize.define('Evento', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    local: {
      type: DataTypes.STRING,
    },
  });

  return Evento;
};

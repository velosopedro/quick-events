// models/Evento.js
module.exports = (sequelize, DataTypes) => {
  const Evento = sequelize.define("Evento", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Evento;
};

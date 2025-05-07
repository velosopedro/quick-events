const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Evento extends Model {
    static associate(models) {
      // associações podem ser definidas aqui
    }
  }

  Evento.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    local: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Evento'
  });

  return Evento;
}; 
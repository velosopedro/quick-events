// models/evento.js
module.exports = (sequelize, DataTypes) => {
  const Evento = sequelize.define('Evento', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'O nome do evento é obrigatório'
        },
        len: {
          args: [3, 100],
          msg: 'O nome deve ter entre 3 e 100 caracteres'
        }
      }
    },
    descricao: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [0, 500],
          msg: 'A descrição deve ter no máximo 500 caracteres'
        }
      }
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'Data inválida'
        },
        isAfter: {
          args: new Date().toISOString(),
          msg: 'A data do evento deve ser futura'
        }
      }
    },
    local: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'O local do evento é obrigatório'
        }
      }
    }
  }, {
    tableName: 'eventos',
    timestamps: true,
    paranoid: true // Soft delete
  });

  return Evento;
};

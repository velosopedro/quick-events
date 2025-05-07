// middlewares/errorHandler.js

module.exports = (err, req, res, next) => {
  console.error('Erro detalhado:', err);

  // Se for um erro do Sequelize
  if (err.name === 'SequelizeValidationError') {
    return res.status(400).json({
      mensagem: 'Erro de validação',
      erros: err.errors.map(e => e.message)
    });
  }

  // Se for um erro do Sequelize de banco de dados
  if (err.name === 'SequelizeDatabaseError') {
    return res.status(500).json({
      mensagem: 'Erro no banco de dados',
      erro: err.message
    });
  }

  // Para outros tipos de erro
  res.status(500).json({
    mensagem: 'Erro interno do servidor',
    erro: err.message
  });
};
  
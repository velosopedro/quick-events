// middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Erro de validação do Sequelize
  if (err.name === 'SequelizeValidationError') {
    return res.status(400).json({
      mensagem: 'Erro de validação',
      erros: err.errors.map(e => e.message)
    });
  }

  // Erro de chave duplicada
  if (err.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).json({
      mensagem: 'Registro duplicado',
      erros: err.errors.map(e => e.message)
    });
  }

  // Erro de conexão com o banco
  if (err.name === 'SequelizeConnectionError') {
    return res.status(503).json({
      mensagem: 'Erro de conexão com o banco de dados',
      erro: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }

  // Erro de timeout
  if (err.name === 'SequelizeTimeoutError') {
    return res.status(504).json({
      mensagem: 'Timeout na operação do banco de dados',
      erro: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }

  // Erro de sintaxe JSON
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      mensagem: 'JSON inválido',
      erro: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }

  // Erro padrão
  res.status(500).json({
    mensagem: 'Erro interno do servidor',
    erro: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

module.exports = errorHandler;
  
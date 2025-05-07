const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
      return res.status(401).json({ error: 'Token erro' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).json({ error: 'Token mal formatado' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Verifica se o usuário ainda existe
    const usuario = await Usuario.findByPk(decoded.id);
    if (!usuario) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    // Adiciona informações do usuário na requisição
    req.userId = decoded.id;
    req.userRole = decoded.role;
    req.user = usuario;

    return next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expirado' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Token inválido' });
    }
    return res.status(500).json({ error: 'Erro na autenticação' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ error: 'Acesso negado. Apenas administradores podem acessar este recurso.' });
  }
  return next();
};

const isOwnerOrAdmin = (req, res, next) => {
  const { id } = req.params;
  
  if (req.userRole === 'admin' || req.userId === parseInt(id)) {
    return next();
  }
  
  return res.status(403).json({ error: 'Acesso negado. Você não tem permissão para acessar este recurso.' });
};

module.exports = { auth, isAdmin, isOwnerOrAdmin }; 
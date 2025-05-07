const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

class AuthController {
  static generateToken(id, role) {
    return jwt.sign(
      { id, role },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
        algorithm: 'HS256'
      }
    );
  }

  async register(req, res) {
    try {
      const { nome, email, senha } = req.body;

      if (await Usuario.findOne({ where: { email } })) {
        return res.status(400).json({ error: 'Email já está em uso' });
      }

      const usuario = await Usuario.create({
        nome,
        email,
        senha,
        role: 'user'
      });

      usuario.senha = undefined;

      const token = AuthController.generateToken(usuario.id, usuario.role);

      return res.status(201).json({
        usuario,
        token,
        message: 'Usuário registrado com sucesso'
      });
    } catch (error) {
      console.error('Erro no registro:', error);
      return res.status(400).json({ 
        error: 'Falha no registro',
        details: error.message
      });
    }
  }

  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const usuario = await Usuario.findOne({ where: { email } });

      if (!usuario) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
      }

      if (!(await usuario.validarSenha(senha))) {
        return res.status(400).json({ error: 'Senha inválida' });
      }

      usuario.senha = undefined;

      const token = AuthController.generateToken(usuario.id, usuario.role);

      return res.json({
        usuario,
        token,
        message: 'Login realizado com sucesso'
      });
    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(400).json({ 
        error: 'Falha no login',
        details: error.message
      });
    }
  }

  async me(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId, {
        attributes: { exclude: ['senha'] }
      });

      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      return res.json(usuario);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return res.status(500).json({ 
        error: 'Erro ao buscar usuário',
        details: error.message
      });
    }
  }
}

module.exports = new AuthController(); 
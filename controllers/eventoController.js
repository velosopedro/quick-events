const { Evento } = require('../models');
const { Op } = require('sequelize');

// Listar todos os eventos
exports.listarEventos = async (req, res, next) => {
  try {
    const { data_inicio, data_fim, local } = req.query;
    
    const where = {};
    
    if (data_inicio && data_fim) {
      where.data = {
        [Op.between]: [data_inicio, data_fim]
      };
    }
    
    if (local) {
      where.local = {
        [Op.iLike]: `%${local}%`
      };
    }

    const eventos = await Evento.findAll({
      where,
      order: [['data', 'ASC']]
    });
    
    res.json(eventos);
  } catch (error) {
    next(error);
  }
};

// Buscar um evento específico
exports.buscarEvento = async (req, res, next) => {
  try {
    const evento = await Evento.findByPk(req.params.id);
    
    if (!evento) {
      return res.status(404).json({ 
        mensagem: 'Evento não encontrado',
        erro: `Não existe evento com o ID ${req.params.id}`
      });
    }
    
    res.json(evento);
  } catch (error) {
    next(error);
  }
};

// Criar um novo evento
exports.criarEvento = async (req, res, next) => {
  try {
    const { nome, descricao, data, local } = req.body;
    
    // Validação básica
    if (!nome || !data || !local) {
      return res.status(400).json({
        mensagem: 'Dados inválidos',
        erro: 'Nome, data e local são obrigatórios'
      });
    }

    const evento = await Evento.create({
      nome,
      descricao,
      data: new Date(data),
      local
    });
    
    res.status(201).json(evento);
  } catch (error) {
    next(error);
  }
};

// Atualizar um evento
exports.atualizarEvento = async (req, res, next) => {
  try {
    const { nome, descricao, data, local } = req.body;
    
    const evento = await Evento.findByPk(req.params.id);
    
    if (!evento) {
      return res.status(404).json({ 
        mensagem: 'Evento não encontrado',
        erro: `Não existe evento com o ID ${req.params.id}`
      });
    }

    // Validação básica
    if (!nome || !data || !local) {
      return res.status(400).json({
        mensagem: 'Dados inválidos',
        erro: 'Nome, data e local são obrigatórios'
      });
    }

    await evento.update({
      nome,
      descricao,
      data: new Date(data),
      local
    });
    
    res.json(evento);
  } catch (error) {
    next(error);
  }
};

// Deletar um evento
exports.deletarEvento = async (req, res, next) => {
  try {
    const evento = await Evento.findByPk(req.params.id);
    
    if (!evento) {
      return res.status(404).json({ 
        mensagem: 'Evento não encontrado',
        erro: `Não existe evento com o ID ${req.params.id}`
      });
    }

    await evento.destroy();
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}; 
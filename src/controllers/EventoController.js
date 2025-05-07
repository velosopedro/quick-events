const { Evento } = require('../models');
const sequelize = require('../config/database');

class EventoController {
  async index(req, res) {
    try {
      const eventos = await Evento.findAll();
      return res.json(eventos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar eventos' });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const evento = await Evento.findByPk(id);

      if (!evento) {
        return res.status(404).json({ error: 'Evento não encontrado' });
      }

      return res.json(evento);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar evento' });
    }
  }

  async store(req, res) {
    try {
      const { nome, descricao, data, local } = req.body;

      if (!nome || !descricao || !data || !local) {
        return res.status(400).json({ error: 'Dados incompletos' });
      }

      const evento = await Evento.create({
        nome,
        descricao,
        data,
        local
      });

      return res.status(201).json(evento);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar evento' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao, data, local } = req.body;

      const evento = await Evento.findByPk(id);

      if (!evento) {
        return res.status(404).json({ error: 'Evento não encontrado' });
      }

      await evento.update({
        nome: nome || evento.nome,
        descricao: descricao || evento.descricao,
        data: data || evento.data,
        local: local || evento.local
      });

      return res.json(evento);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar evento' });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const evento = await Evento.findByPk(id);

      if (!evento) {
        return res.status(404).json({ error: 'Evento não encontrado' });
      }

      await evento.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar evento' });
    }
  }
}

module.exports = new EventoController(); 
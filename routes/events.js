// routes/events.js
const express = require('express');
const { Evento } = require('../models');  // Supondo que você tenha o modelo 'Evento' no Sequelize
const router = express.Router();

// Rota GET para listar todos os eventos
router.get('/', async (req, res) => {
  try {
    const eventos = await Evento.findAll();  // Aqui estamos usando findAll do Sequelize
    res.json(eventos);
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    res.status(500).send('Erro ao buscar eventos');
  }
});

// Rota POST para criar um novo evento
router.post('/', async (req, res) => {
  try {
    const { nome, descricao, data, local } = req.body;
    const novoEvento = await Evento.create({ nome, descricao, data, local });
    res.status(201).json(novoEvento);
  } catch (error) {
    console.error('Erro ao criar evento:', error);
    res.status(500).send('Erro ao criar evento');
  }
});

module.exports = router;

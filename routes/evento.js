// routes/evento.js
const express = require('express');
const router = express.Router();
const { Evento } = require('../models');

// Rota de criação de evento
router.post('/', async (req, res) => {
  try {
    const evento = await Evento.create(req.body);
    res.status(201).json(evento);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar evento', error });
  }
});

// Rota para listar eventos
router.get('/', async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar eventos', error });
  }
});

module.exports = router;

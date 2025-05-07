const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

// Rotas de eventos
router.get('/eventos', eventoController.listarEventos);
router.get('/eventos/:id', eventoController.buscarEvento);
router.post('/eventos', eventoController.criarEvento);
router.put('/eventos/:id', eventoController.atualizarEvento);
router.delete('/eventos/:id', eventoController.deletarEvento);

module.exports = router; 
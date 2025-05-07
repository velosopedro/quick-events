const { Router } = require('express');
const eventosRoutes = require('./eventos');
const authRoutes = require('./auth');
const { auth } = require('../middlewares/auth');

const router = Router();

// Rotas públicas
router.use('/auth', authRoutes);

// Rotas protegidas
router.use('/eventos', auth, eventosRoutes);

module.exports = router; 
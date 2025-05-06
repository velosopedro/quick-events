// routes/events.js
const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');
const authMiddleware = require('../middlewares/auth');

// Rotas públicas
router.get('/', eventsController.index);
router.get('/:id', eventsController.show);

// Rotas autenticadas
router.use(authMiddleware);

router.post('/', eventsController.store);
router.put('/:id', eventsController.update);
router.delete('/:id', eventsController.delete);
router.post('/:eventId/attendees/:userId', eventsController.addAttendee);

module.exports = router;
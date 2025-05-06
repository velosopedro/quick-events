const express = require('express');
const router = express.Router();

const eventsRoutes = require('./events');
router.use('/eventos', eventsRoutes);

module.exports = router;

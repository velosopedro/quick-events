// controllers/eventsController.js
const { Event, User } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const events = await Event.findAll({
        include: [
          { model: User, as: 'organizer', attributes: ['id', 'name'] },
          { model: User, as: 'attendees', attributes: ['id', 'name'] }
        ]
      });
      return res.json(events);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async show(req, res) {
    try {
      const event = await Event.findByPk(req.params.id, {
        include: [
          { model: User, as: 'organizer', attributes: ['id', 'name'] },
          { model: User, as: 'attendees', attributes: ['id', 'name'] }
        ]
      });
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      return res.json(event);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async store(req, res) {
    try {
      const { userId } = req; // Supondo que você tenha middleware de autenticação
      const event = await Event.create({ ...req.body, organizerId: userId });
      return res.status(201).json(event);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const event = await Event.findByPk(req.params.id);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      
      // Verificar se o usuário é o organizador ou admin
      if (event.organizerId !== req.userId && req.userRole !== 'admin') {
        return res.status(403).json({ error: 'Not authorized' });
      }

      await event.update(req.body);
      return res.json(event);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const event = await Event.findByPk(req.params.id);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      
      // Verificar se o usuário é o organizador ou admin
      if (event.organizerId !== req.userId && req.userRole !== 'admin') {
        return res.status(403).json({ error: 'Not authorized' });
      }

      await event.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async addAttendee(req, res) {
    try {
      const event = await Event.findByPk(req.params.eventId);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      
      await event.addAttendee(req.params.userId);
      return res.status(201).json({ message: 'User added to event' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
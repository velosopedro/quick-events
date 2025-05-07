const { Router } = require('express');
const EventoController = require('../controllers/EventoController');

const router = Router();

/**
 * @swagger
 * /api/v1/eventos:
 *   get:
 *     tags: [Eventos]
 *     summary: Lista todos os eventos
 *     responses:
 *       200:
 *         description: Lista de eventos
 */
router.get('/', EventoController.index);

/**
 * @swagger
 * /api/v1/eventos/{id}:
 *   get:
 *     tags: [Eventos]
 *     summary: Busca um evento específico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Evento encontrado
 *       404:
 *         description: Evento não encontrado
 */
router.get('/:id', EventoController.show);

/**
 * @swagger
 * /api/v1/eventos:
 *   post:
 *     tags: [Eventos]
 *     summary: Cria um novo evento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - descricao
 *               - data
 *               - local
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date-time
 *               local:
 *                 type: string
 *     responses:
 *       201:
 *         description: Evento criado
 *       400:
 *         description: Dados inválidos
 */
router.post('/', EventoController.store);

/**
 * @swagger
 * /api/v1/eventos/{id}:
 *   put:
 *     tags: [Eventos]
 *     summary: Atualiza um evento
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date-time
 *               local:
 *                 type: string
 *     responses:
 *       200:
 *         description: Evento atualizado
 *       404:
 *         description: Evento não encontrado
 */
router.put('/:id', EventoController.update);

/**
 * @swagger
 * /api/v1/eventos/{id}:
 *   delete:
 *     tags: [Eventos]
 *     summary: Remove um evento
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Evento removido
 *       404:
 *         description: Evento não encontrado
 */
router.delete('/:id', EventoController.destroy);

module.exports = router; 
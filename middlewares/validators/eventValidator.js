// middlewares/validators/eventValidator.js
const { body } = require('express-validator');

module.exports = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('date').isISO8601().withMessage('Invalid date format'),
  body('location').notEmpty().withMessage('Location is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('isFree').optional().isBoolean(),
  body('price').optional().isFloat({ min: 0 })
];
// middleware/validation.js
const { ValidationError } = require('../errors/customErrors.js');

function validateProduct(req, res, next) {
  const { name, description, price, category, inStock } = req.body;
  if (
    typeof name !== 'string' ||
    typeof description !== 'string' ||
    typeof price !== 'number' ||
    typeof category !== 'string' ||
    typeof inStock !== 'boolean'
  ) {
    throw new ValidationError('Invalid product data');
    // return res.status(400).json({ error: 'Invalid product data' });
  }
  next();
}

module.exports = { validateProduct }; // This middleware validates the product data in the request body
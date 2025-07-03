// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];


const express = require('express');
const router = express.Router();

// Import necessary modules
const logger = require('../middleware/logger.js'); // logger middleware
const authMiddleware = require('../middleware/auth.js'); // auth middleware

// middleware to parse JSON requests
router.use(express.json());

router.use(logger); // Middleware to log requests
router.use(authMiddleware); // Middleware to authenticate requests (if needed)

const { validateProduct } = require('../middleware/validation.js'); // middleware to handle product validation

/**
 * route implementation for /api/products 
 */
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController.js');

router.get('/', getProducts); // Get all products
router.get('/:id', getProduct) // Get a specific product by ID
router.post('/', validateProduct, createProduct); // Create a new product
router.put('/:id', validateProduct, updateProduct); // Update a product
router.delete('/:id', validateProduct, deleteProduct); // Delete a product


module.exports = router;
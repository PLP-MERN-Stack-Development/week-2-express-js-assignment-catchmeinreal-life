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
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve a list of Products
 *     description: Returns a list of all products
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: '1'
 *                   name:
 *                     type: string
 *                     example: Laptop
 *                   description:
 *                     type: string
 *                     example: High-performance laptop with 16GB RAM
 *                   price:
 *                     type: number
 *                     example: 1200
 *                   category:
 *                     type: string
 *                     example: electronics
 *                   inStock:
 *                     type: boolean
 *                     example: true
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     description: Returns a single product by its ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     responses:
 *       200:
 *         description: A single product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: '1'
 *                 name:
 *                   type: string
 *                   example: Laptop
 *                 description:
 *                   type: string
 *                   example: High-performance laptop with 16GB RAM
 *                 price:
 *                   type: number
 *                   example: 1200
 *                 category:
 *                   type: string
 *                   example: electronics
 *                 inStock:
 *                   type: boolean
 *                   example: true
 */
router.get('/', getProducts); // Get all products
router.get('/:id', getProduct) // Get a specific product by ID
router.post('/', validateProduct, createProduct); // Create a new product
router.put('/:id', validateProduct, updateProduct); // Update a product
router.delete('/:id', validateProduct, deleteProduct); // Delete a product


module.exports = router;
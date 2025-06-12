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
const logger = require('../middleware/logger.js'); // Assuming you have a logger middleware
const authMiddleware = require('../middleware/auth.js'); // Assuming you have an auth middleware

// middleware to parse JSON requests
// router.use(express.json());
// Middleware to log requests
router.use(logger);
// Middleware to authenticate requests (if needed)
router.use(authMiddleware);
// middleware to handle validation
const { validateProduct } = require('../middleware/validation.js'); // Assuming you have a validation middleware
// router.use(validateProduct); // Apply validation middleware to all product routes

// route implementation for GET /api/products 
// GET /api/products  Get all products
router.get('/', (req, res) => {
  res.send(products);
});

// GET /api/products/:id  Get a specific product by ID
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        return res.status(404).send({ message: 'Product not found' });
    }
    
    res.send(product);
})

// `POST /api/products`: Create a new product
router.post('/', validateProduct, (req, res) => {
    const newProduct = req.body;
    
    // Validate the product data
    // middleware can be used for validation
    // if (!newProduct.name || !newProduct.price || !newProduct.category) {
    //     return res.status(400).send({ message: 'Name, price, and category are required' });
    // }
    
    // Generate a new ID for the product
    newProduct.id = (products.length + 1).toString();
    
    products.push(newProduct);

    // console.log("New product added:", newProduct);
    // console.log("New product added:", products[products.length - 1]);
    // Send the newly created product back in the response
    res.status(201).send(newProduct);
});

// PUT /api/products/:id - Update a product
router.put('/:id', validateProduct, (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    
    // Find the product to update
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        return res.status(404).send({ message: 'Product not found' });
    }
    
    // Update the product
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    
    // res.send(products[productIndex]);
    res.send("Product updated successfully!");
});

// DELETE /api/products/:id - Delete a product

router.delete('/:id', validateProduct, (req, res) => {
    const productId = req.params.id;
    
    // Find the product to delete
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        return res.status(404).send({ message: 'Product not found' });
    }
    
    // Remove the product from the array
    products.splice(productIndex, 1);
    
    res.send({ message: 'Product deleted successfully' });
});
// Middleware for request logging
router.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

module.exports = router;
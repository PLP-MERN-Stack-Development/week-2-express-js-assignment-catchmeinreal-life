// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
// const bodyParser = require('body-parser');
// const { v4: uuidv4 } = require('uuid');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5678;

//routes
const mainRoute = require('./src/routes/mainRoute.js');
const productRoute = require('./src/routes/productRoute.js');
// const authRoute = require('./src/routes/authRoute.js');
// const requestLogger = require('./src/middleware/logger.js');
// const authMiddleware = require('./src/middleware/authMiddleware.js');
// const errorHandler = require('./src/middleware/errorHandler.js');

// Middleware to parse JSON requests
app.use(express.json());
// app.use(bodyParser.json());

// Middleware to serve static files (if needed)
// app.use(express.static('public'));
// app.use(express.static('views'));


app.use("/main", mainRoute);
app.use("/api/products", productRoute);
//app.use("/api/auth", authRoute);



// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product


// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling

// Start the server




// globlal middleware for logging err
app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  console.log("play don toliver");
});

// Export the app for testing purposes
// module.exports = app; 
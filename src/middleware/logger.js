// - Create a custom logger middleware that logs the request method, URL, and timestamp
// middleware/logger.js
module.exports = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
};
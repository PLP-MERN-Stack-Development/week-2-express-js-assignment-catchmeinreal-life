// ### Task 4: Error Handling
// - Implement global error handling middleware
// - Create custom error classes for different types of errors (e.g., NotFoundError, ValidationError)
// - Add proper error responses with appropriate HTTP status codes
// - Handle asynchronous errors using try/catch blocks or a wrapper function

// errors/customErrors.js
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.status = 404;
  }
}
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.status = 400;
  }
}
module.exports = { NotFoundError, ValidationError };

// middleware/auth.js
// create a simple authentication middleware that checks for an API key in the request headers
// This middleware checks for a specific API key in the request headers.
module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  console.log(req.headers);
  if (apiKey !== '123456') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
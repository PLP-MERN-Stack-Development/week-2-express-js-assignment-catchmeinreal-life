// "/main" route page
const express = require('express');
const router = express.Router();

// middleware
// const bodyParser = require('body-parser'); // Not needed as express.json() is used
const logger = require('../middleware/logger.js');
const authMiddleware = require('../middleware/auth.js'); // Assuming you have an auth middleware
// 

router.get("/",logger, authMiddleware, (req, res) => {
    res.json({
        message : "Welcome to the Main Page!"
    });
});

module.exports = router;
// This route can be used to render the main page of the application
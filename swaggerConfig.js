const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'Express Api Documentation',
            version: '1.0.0',
            description: 'A simpe API documentation for my website',
        },
        servers: [
            {
                url: 'http://localhost:5678',
            },
        ],
    },
    apis: ['./src/routes/*.js'], //path to the API routes
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
 module.exports = swaggerDocs;

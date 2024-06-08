const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Library System API',
      version: '1.0.0',
      description: 'API Documentation for Library System',
    },
    servers: [{ url: 'http://localhost:8000' }],
  },
  apis: ['./index.js', './src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = { swaggerUi, swaggerDocs };

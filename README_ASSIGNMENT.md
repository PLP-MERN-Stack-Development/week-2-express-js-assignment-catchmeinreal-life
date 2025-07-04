# Express.js RESTful API Assignment

## Overview
This project is a RESTful API built with Express.js for managing products. It demonstrates routing, middleware, authentication, validation, error handling, and API documentation using Swagger.

## Features
- CRUD operations for products
- Custom middleware for logging, authentication, and validation
- Comprehensive error handling
- Filtering, pagination, and search (not implemented)
- API documentation with Swagger (OpenAPI)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file based on `.env.example` and set your environment variables.
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | /api/products        | Get all products         |
| GET    | /api/products/:id    | Get a specific product   |
| POST   | /api/products        | Create a new product     |
| PUT    | /api/products/:id    | Update a product         |
| DELETE | /api/products/:id    | Delete a product         |

All endpoints require authentication via Bearer token.

## Example Requests

### Get All Products
```sh
curl -H "x-api-key: 123456" http://localhost:5678/api/products
```

### Create a Product
```sh
curl -X POST -H "Content-Type: application/json" -H "x-api-key: 123456" \
  -d '{"name":"Tablet","description":"10-inch display","price":300,"category":"electronics","inStock":true}' \
  http://localhost:5678/api/products
```

## Middleware
- **Logger:** Logs all incoming requests.
- **Authentication:** Protects routes using JWT.
- **Validation:** Validates product data on create/update.

## Error Handling
All errors are handled and returned as JSON with appropriate HTTP status codes.

## API Documentation
Swagger UI is available at: [http://localhost:5678/api-docs](http://localhost:5678/api-docs)

## License
This project is for educational purposes.

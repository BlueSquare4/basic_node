
---

# CRUD API with User Authentication using Node.js and Express.js

This project implements a basic CRUD (Create, Read, Update, Delete) API for managing products with user authentication using JSON Web Tokens (JWT) in a Node.js environment with Express.js.

## Features

- **CRUD Operations**: Allows users to perform CRUD operations on products.
- **User Authentication**: Provides user registration, login, and protected routes using JWT.
- **In-Memory Data Storage**: Uses an in-memory array to store product data for simplicity.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/crud-api-jwt-auth.git
   ```

2. Install dependencies:

   ```bash
   cd crud-api-jwt-auth
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

## Usage

### CRUD API Endpoints

- **List all products**: `GET /products`
- **Create a new product**: `POST /products`
  - Request body: `{ "name": "Product Name", "description": "Product Description", "price": 10 }`
- **Retrieve a specific product by its ID**: `GET /products/:id`
- **Update an existing product's details**: `PUT /products/:id`
  - Request body: `{ "name": "Updated Product Name", "description": "Updated Product Description", "price": 20 }`
- **Delete a product by its ID**: `DELETE /products/:id`

### User Authentication

- **Register a new user**: `POST /auth/register`
  - Request body: `{ "username": "newuser", "password": "password" }`
- **User login**: `POST /auth/login`
  - Request body: `{ "username": "username", "password": "password" }`
  - Returns a JWT token.
- **Sign out**: `POST /auth/signout`

### Protected Routes

- **Protected route**: `GET /auth/protected`
  - Requires a valid JWT token in the Authorization header.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bug fixes, improvements, or new features.

## License

This project is licensed under the [MIT License](LICENSE).

---

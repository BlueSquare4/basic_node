const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// List of all products
router.get('/', productController.getAllProducts);

// Creating a new product
router.post('/', productController.createProduct);

// Retrieving a specific product by its ID
router.get('/:id', productController.getProductById);

// Updating an existing product's details
router.put('/:id', productController.updateProduct);

// Deleting a product by its ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;

const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getOneProduct,
} = require('../controller/productControllers');

// Get all products from db
// Route GET /api/products
// access Public
router.get('/', getAllProducts);

// Get a product from db by ID
// Route GET /api/products/:id
// access Public
router.get('/:id', getOneProduct);

module.exports = router;

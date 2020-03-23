// Constants
const express = require('express');
const router = express.Router();

// Import the Product model
const Product = require('../db/models/Product');

// Get all products
router.get('/', (request, response) => {
    Product.find({}).then(products => response.json(products));
});

// Get product by id
router.get('/:id', (request, response) => {
    Product.findById(request.params.id).then(product => response.json(product));    
});

// Create a product
router.post('/', (request, response) => {
    Product.create(request.body).then(product => response.json(product));
});

// Update a product by id
router.put('/:id', (request, response) => {
    Product.findByIdAndUpdate(request.params.id, request.body, {new: true})
    .then(product => response.json(product));
});

// Delete a product
router.delete('/:id', (request, response) => {
    Product.findByIdAndDelete(request.params.id).then(product => response.json(product));
});

module.exports = router;

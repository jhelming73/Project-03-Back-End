// Constants
const express = require('express');
const router = express.Router();

// Import the Order model
const Order = require('../db/models/Order');

// Get all orders
router.get('/', (request, response) => {
    Order.find({}).then(orders => response.json(orders));
});

// Get order by id
router.get('/:id', (request, response) => {
    Order.findById(request.params.id).then(order => response.json(order));    
});

// Create an order
router.post('/', (request, response) => {
    Order.create(request.body).then(order => response.json(order));
});

// Update an order by id
router.put('/:id', (request, response) => {
    Order.findByIdAndUpdate(request.params.id, request.body, {new: true})
    .then(order => response.json(order));
});

// Delete an order
router.delete('/:id', (request, response) => {
    Order.findByIdAndDelete(request.params.id).then(order => response.json(order));
});

module.exports = router;
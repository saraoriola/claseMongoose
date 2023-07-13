// Import the 'express' module
const express = require('express');
// Create a new router object
const router = express.Router();
// Import the 'ProductController' module
const ProductController = require('../controllers/ProductController');

// Define a POST route for creating a product
router.post('/', ProductController.create);

// Define a GET route for retrieving all products
router.get('/', ProductController.getAll);

// Define a GET route for retrieving a product by ID
router.get('/id/:_id', ProductController.getById); // _id -> because it is named _id in the controller

// Export the router to be used in other parts of the application
module.exports = router;

// Import the 'express' module
const express = require('express');
// Create a new router object
const router = express.Router();
// Import the 'ProductController' module
const ProductController = require('../controllers/ProductController');

// Define a POST route for creating a product
router.post('/', ProductController.create);

// Export the router to be used in other parts of the application
module.exports = router;

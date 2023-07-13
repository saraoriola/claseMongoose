// Import the 'express' module
const express = require('express');
// Create a new router object
const router = express.Router();
// Import the 'ProductController' module
const ProductController = require('../controllers/ProductController');

//CREATE
// Define a POST route for creating a product
router.post('/', ProductController.create);

//READ
// Define a GET route for retrieving all products
router.get('/', ProductController.getAll);
// Define a GET route for retrieving a product by ID
router.get('/id/:_id', ProductController.getById);
// Define a GET route for retrieving products by name
router.get('/name/:name', ProductController.getProductsByName);

//UPDATE

//DELETE

// Export the router to be used in other parts of the application
module.exports = router;

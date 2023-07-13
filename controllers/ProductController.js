// Import the 'Product' model from the '../models/Product' file
const Product = require("../models/Product");

// Define the 'ProductController' object
const ProductController = {
    // Define an asynchronous function 'create' to create a product
    async create(req, res) {
        try {
            // Use the 'Product' model to create a new product using the request body
            const product = await Product.create(req.body);
            // Send a successful response with the created product
            res.status(201).send(product);
        } catch (error) {
            console.error(error);
            // Send an error response if there's a problem creating the product
            res.status(500).send({ message: 'There was an issue creating the product' });
        }
    },
};

// Export the 'ProductController' object to be used in other parts of the application
module.exports = ProductController;

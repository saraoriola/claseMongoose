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

    // Define an asynchronous function 'getAll' to retrieve all products
    async getAll(req, res) {
        try {
            // Use the 'Product' model to retrieve all products
            const products = await Product.find();
            // Send a response with the retrieved products
            res.send(products);
        } catch (error) {
            console.error(error);
        }
    },
    
    // Define an asynchronous function 'getById' to retrieve a product by its ID
    async getById(req, res) {
        try {
            // Use the 'Product' model to retrieve a product by its ID
            const product = await Product.findById(req.params._id);
            // Send a response with the retrieved product
            res.send(product);
        } catch (error) {
            console.error(error);
        }
    },

    // Define an asynchronous function 'getProductsByName' to retrieve products by name
    async getProductsByName(req, res) {
        try {
            // Check if the length of the search query exceeds 20 characters // VALIDATION
            if (req.params.name.length > 20) {
                return res.status(400).send('Search query is too long');
            }

            // Create a regular expression with the parameter 'name' received in the request
            const name = new RegExp(req.params.name, "i"); // i for case-insensitive matching
      
            // Find products that match the 'name' using the Product model
            const products = await Product.find({ name });
      
            // Send the retrieved products in the response
            res.send(products);
        } catch (error) {
            console.log(error);
        }
    }
    
};

// Export the 'ProductController' object to be used in other parts of the application
module.exports = ProductController;

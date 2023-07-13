// Import the 'mongoose' module
const mongoose = require('mongoose');

// Define the schema for the Product collection
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
}, { timestamps: true }); // createdAt and updatedAt

// Add an index for the 'name' field to enable text search
ProductSchema.index({
    name: "text",
});

// Create a model using the schema, which represents the 'Product' collection in the database
const Product = mongoose.model('Product', ProductSchema);

// Export the 'Product' model to be used in other parts of the application
module.exports = Product;

const express = require("express");
const { dbConnection } = require("./config/config");

// Import the "express" module
const app = express();

// Define the port number on which the server will run
const PORT = 3000;

// Establish the connection with the database
dbConnection();

// Start the server on the specified port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

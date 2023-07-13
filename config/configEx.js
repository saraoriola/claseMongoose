// IMPORT MONGOOSE
const mongoose = require("mongoose");
// IMPORT OUR URI
const { MONGO_URI } = require("./keys");

// CONNECT TO OUR DATABASE
const dbConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error(error);
        throw new Error("Error initializing the database");
    }
};

module.exports = {
dbConnection,
};
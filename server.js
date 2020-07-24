const express = require('express');
const app = express();

// Middleware utilities
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const bodyParser = require("body-parser");
const morgan = require('morgan');

// Mongoose 
const mongoose = require('mongoose');

// Config variables
require('dotenv').config();



// Getting data in json format
app.use(bodyParser.json())

// API SECURITY
app.use(mongoSanitize());   // Sanitize Data
app.use(helmet());          // Set security headers
app.use(xss())              // Prevent XSS(cross site scripting) attacks
app.use(hpp());             // Prevent hpp param pollution

// Dev Middleware
app.use(morgan('dev'));

// Test route
app.get("/api", (req, res) => {
    res.json({
        success: true,
        message: "API running"
    });
})


// Starting the server
app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server started on port ${process.env.PORT || 5000}`);
});

const express = require("express");
const app = express();
const path = require("path");

// Middleware utilities
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Mongoose
const mongoose = require("mongoose");

// Config variables
require("dotenv").config();

//Connecting to the database
mongoose.promise = global.Promise;
mongoose.connect(
  process.env.MongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err, db) => {
    if (err) console.log(err);
    else console.log("Database Connected...");
  }
);

// Getting data in json format
app.use(bodyParser.json());

// API SECURITY
app.use(mongoSanitize()); // Sanitize Data
app.use(helmet()); // Set security headers
app.use(xss()); // Prevent XSS(cross site scripting) attacks
app.use(hpp()); // Prevent hpp param pollution

// Dev Middleware
app.use(morgan("dev"));

// Mounting the routes
app.use("/api/adminUser/auth", require("./routes/adminUserAuth"));
app.use("/api/adminUser", require("./routes/adminUser"));
app.use("/api/item", require("./routes/item"));
app.use("/api/visitorCount", require("./routes/visitorCount"));

// Serve Static Assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Starting the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`);
});

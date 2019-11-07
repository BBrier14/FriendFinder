// Dependencies
//========================================
const express = require("express");
const path = require("path");

// Express Set-Up
//========================================
const app = express();
const PORT = process.env.PORT || 8080;

// Express Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Router
//========================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
//========================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });





// Load data from friends.js
//================================
const characters = require("../data/friends");

// Routing
//================================
module.exports = function(app){

    // Get request to display all possible matches
    app.get("/api/characters", function (req, res){
        res.json(characters);
    });

    // Post request
    
}
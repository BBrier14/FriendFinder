// const userData = require("../data/friends");

// Load data from friends.js
//================================
const characters = require("../data/friends");

// Routing
//================================
module.exports = function(app) {
  // Get request to display all possible matches
  app.get("/api/characters", function(req, res) {
    res.json(characters);
  });

  // Variables that will be used for the math
  const userScore = [];
  const comparisonScore = 0;

  // Post request
  app.post("/api/characters", function(req, res) {

    const currentUserScore = req.body.scores;
    
    for (let i = 0; i < characters.length; i++) {
      const characterScore = characters[i].score;
      comparisonScore = calculateScore(currentUserScore, characterScore);
      userScore.push(comparisonScore);
    }

    const index = 0;
    const value = userScore[0];
    for (const i = 0; userScore.length; i++) {
      if (userScore[i] < value) {
        value = userScore[i];
        index = i;
      }
    }
    res.send(characters[index]);
    characters.push(req.body);
  });
};

const scoreDifference = 0;

// Function to find most comperable score
function calculateScore(currentUserScore, characterScore) {
  scoreDifference = 0;
  for (let i = 0; i < currentUserScore.length; i++) {
    scoreDifference += Math.abs(currentUserScore[i] - characterScore[i]);
  }
    console.log(scoreDifference);
    return scoreDifference;
  
}

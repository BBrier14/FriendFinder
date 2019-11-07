// const userData = require("../data/friends");

// Load data from friends.js
//================================
const characterData = require("../data/friends");

// Routing
//================================
module.exports = function(app) {
  // Get request to display all possible matches
  app.get("/api/characters", function(req, res) {
    res.json(characterData);
  });

 

  // Post request
  app.post("/api/characters", function(req, res) {
    const bestFriendDifference = 25;
    const matchScore = 0;

    for (let i = characterData.length - 1; i >= 0; i--){
      let totalDifference = 0;

      for (let k = 0; k < 10; k++){
        totalDifference = totalDifference + Math.abs(characterData[i].score[i] - req.body.score[k]);
      }
      if (totalDifference < bestFriendDifference) {
        bestFriendDifference = totalDifference
        matchScore = i;
      }
    }

    characterData.push(req.body);
    res.json({name: characterData[matchScore].name, photo: characterData[matchScore.photo]});
  });
}



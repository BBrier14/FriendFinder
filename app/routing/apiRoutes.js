
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
    console.log(req.body.scores);

    var user = req.body;

    for (var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }

// the first friend they find is the default but the minimum difference in the scores will be the person they are actually matched with.
    var friendIndex = 0;
    var minDifference = 30;


// you begin with a difference of zero and the user score and friend are compared. The difference is added to the total difference.
    for (var i = 0; i < characterData.length; i++) {
        var totalDifference = 0;
        for (var d = 0; d < characterData[i].scores.length; d++) {
            var difference = Math.abs(user.scores[d] - characterData[i].scores[d]);
            totalDifference += difference;
        }
// if new minimum score occurs, I change the index of friends and establish a new minimum score for the next time comparisons are made.
        if (totalDifference < minDifference) {
            friendIndex = i;
            minDifference = totalDifference;
        }
    }

// when a match is made the user is added to the array of friends.
    characterData.push(user);


// this sends the best match back to the browser.
    res.json(characterData[friendIndex]);
});
};



    
//     let bestFriendDifference = 25;
//     let matchScore = 0;

//     for (let i = characterData.length - 1; i >= 0; i--){
//       let totalDifference = 0;

//       for (let k = 0; k < 10; k++){
//         totalDifference = totalDifference + Math.abs(characterData[i].score[i] - req.body.score[k]);
//       }
//       if (totalDifference < bestFriendDifference) {
//         bestFriendDifference = totalDifference;
//         matchScore = i;
//       }
//     }

//     characterData.push(req.body);
//     res.json({name: characterData[matchScore].name, photo: characterData[matchScore.photo]});

//   })
// }



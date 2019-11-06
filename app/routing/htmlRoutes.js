// Dependencies
//=====================
const path = require("path");

// Routing
//=====================
module.exports = function(app) {
  app.get("/home", function(rec, res) {
    res.sendfile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(rec, res) {
    res.sendfile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", function(rec, res) {
    res.sendfile(path.join(__dirname, "../public/home.html"));
  });
};

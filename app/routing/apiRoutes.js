var friends = require("../data/friends");
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function (req, res) {
    // Insert math shananigans
    friends.push(req.body);
    res.json(true);
  });
};

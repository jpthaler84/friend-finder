app.get("/api/friends", function(req, res) {
  var allFriends = req.params.friends;

  console.log(allFriends);

  res.end();
});

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  characters.push(newFriend);

  res.json(newFriend);
});
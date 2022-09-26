const express = require("express");
const app = express();

const server = app.listen(3000, function() {
      console.log("Node.js is listening to PORT:" + server.address().port);
});

const test = [
  {
    id: "123",
    name: "aaaa"
  }
]

app.get("/api/nft", function(req, res, next){
    res.json(test);
});

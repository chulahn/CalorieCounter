var express = require("express");
var app = express();

var algoliasearch = require("algoliasearch");
var client = algoliasearch("IBBFDOQONG", "66ebd6f2d71b41b986ae389af707318c");
var index = client.initIndex("food");

index.setSettings({
  searchableAttributes: ["Display_Name"],
  customRanking: ["desc(popularity)"]
});

app.get("/", function(req, res) {
  res.sendfile("index.html");
});

app.listen(process.env.PORT || 3000);

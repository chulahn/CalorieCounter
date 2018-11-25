var express = require("express");
var app = express();

var algoliasearch = require("algoliasearch");
var client = algoliasearch("IBBFDOQONG", "66ebd6f2d71b41b986ae389af707318c");

var index = client.initIndex("food");

index.setSettings(
  {
    searchableAttributes: ["Display_Name", "Calories", "Saturated_Fats"],
    customRanking: ["desc(popularity)"]
  },
  function(err, content) {
    console.log(content);
  }
);

app.get("/", function(req, res) {
  res.sendfile("index.html");
});

app.get("/InstantSearch.js", function(req, res) {
  res.sendfile("InstantSearch.js");
});

app.listen(process.env.PORT || 3000);

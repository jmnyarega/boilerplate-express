var express = require('express');
var app = express();
console.log("Hello World");

const filePath = `${__dirname}/views/index.html`;

app.get("/", function(req, res) {
  // res.send("Hello Express");
  res.sendFile(filePath);
});
































 module.exports = app;

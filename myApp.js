var express = require('express');
var app = express();
console.log("Hello World");

// files
const filePath = `${__dirname}/views/index.html`;
const staticPath = `${__dirname}/public`;

// global middlewares
app.use('/public', express.static(staticPath));

app.get("/", function(req, res) {
  // res.send("Hello Express");
  res.sendFile(filePath);
});
































 module.exports = app;

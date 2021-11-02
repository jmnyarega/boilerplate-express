var express = require('express');

require('dotenv').config()
var app = express();
console.log("Hello World");

// files
const filePath = `${__dirname}/views/index.html`;
const staticPath = `${__dirname}/public`;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
};

const getTime = (req, res, next) => {
  req.time = new Date().toString();
  next();
}

// global middlewares
app.use('/public', express.static(staticPath));
app.use(logger);

app.get("/", function (req, res) {
  // res.send("Hello Express");
  res.sendFile(filePath);
});

app.get("/json", (req, res) => {
  let response = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = response.toUpperCase();
  }

  res.json({ message: response });
});

app.get("/now", getTime, (req, res) => res.json({ time: req.time }));






























 module.exports = app;

const express = require('express');
const app = express();

const home = require("./routes/sendFile");
const now = require("./routes/now");
const json = require("./routes/json");
const echo = require("./routes/echo");

const logger = require("./middlewares/logger");
require('dotenv').config()

const staticPath = `${__dirname}/public`;
const filePath = `${__dirname}/views/index.html`;

// global middlewares
app.use('/public', express.static(staticPath));
app.use(logger);

home(filePath, app);
now(app);
json(app);
echo(app);



























 module.exports = app;

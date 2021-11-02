const express = require('express');
const bodyParser = require("body-parser");

require('dotenv').config()

// middlewares
const logger = require("./middlewares/logger");
const staticPath = `${__dirname}/public`;
const filePath = `${__dirname}/views/index.html`;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(staticPath));
app.use(logger);

// routes
const home = require("./routes");
const chainingMiddleware = require("./routes/chaining-middleware");
const routing = require("./routes/routes");
const routeParameter = require("./routes/route-parameter");
const getData = require("./routes/get-data");


home(filePath, app);
chainingMiddleware(app);
routing(app);
routeParameter(app);
getData(app);



























 module.exports = app;

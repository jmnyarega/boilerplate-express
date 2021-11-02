const getTime = require("../middlewares/getTime");

module.exports = (app) => {
  app.get("/now", getTime, (req, res) => res.json({ time: req.time }));
};

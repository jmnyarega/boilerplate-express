module.exports = (app) => {
  app.get("/name", (req, res) => {
    const name = `${req.query.first} ${req.query.last}`;
    res.json({ name });
  });
};

module.exports = (app) => {
  app.get("/:word/echo", (req, res) => {
    const word = req.params.word;
    res.json({ echo: word });
  });
};

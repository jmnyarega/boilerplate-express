module.exports = (filePath, app) => {
  app.get("/", function (req, res) {
    res.sendFile(filePath);
  });
};

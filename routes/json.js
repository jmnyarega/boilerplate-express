module.exports = (app) => {
  app.get("/json", (req, res) => {
    let response = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
      response = response.toUpperCase();
    }
    res.json({ message: response });
  });
};

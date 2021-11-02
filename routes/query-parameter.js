/* In POST, the data doesn’t appear in the URL, it is hidden in the request body
 *  - data can be encoded as
 *      * Query String => HTML forms
 *      * JSON => ajax
 *      * multipart/form-data => upload binary files
 */
module.exports = (app) => {
  app
    .route("/name")
    .get((req, res) => {
      const name = `${req.query.first} ${req.query.last}`;
      res.json({ name });
    })
    .post((req, res) => {
      const first = req.body.first;
      const last = req.body.last;
      res.json({ name: `${first} ${last}` });
    });
};

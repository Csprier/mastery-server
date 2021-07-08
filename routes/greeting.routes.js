module.exports = (function() {
  const greetingRouter = require('express').Router();
  const db = require('../utility/db/db');
  greetingRouter.get('/greeting', (req, res) => {
    let message;
    db.query('SELECT * FROM Greeting', (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data[0].message);
      message = res.json(data[0]);
    });
  });
  return greetingRouter;
})();
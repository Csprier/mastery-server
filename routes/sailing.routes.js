module.exports = (function() {
  const sailingRouter = require('express').Router();
  const db = require('../utility/db/db');
  sailingRouter.get('/fishing', (req, res) => {
    db.query('SELECT * FROM fishing_data', (err, data) => {
      if (err) throw error;
      res.json(data);
    });
  });
  return sailingRouter;
})();
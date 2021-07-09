module.exports = (function() {
  const fishingRouter = require('express').Router();
  const db = require('../utility/db/db');
  fishingRouter.get('/fishing', (req, res) => {
    db.query('SELECT * FROM fishing_data', (err, data) => {
      if (err) throw error;
      res.json(data);
    });
  });
  return fishingRouter;
})();
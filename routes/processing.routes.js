module.exports = (function() {
  const processingRouter = require('express').Router();
  const db = require('../utility/db/db');
  processingRouter.get('/processing', (req, res) => {
    db.query('SELECT * FROM processing_data', (err, data) => {
      if (err) throw error;
      res.json(data);
    });
  });
  return processingRouter;
})();
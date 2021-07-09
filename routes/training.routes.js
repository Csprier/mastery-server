module.exports = (function() {
  const trainingRouter = require('express').Router();
  const db = require('../utility/db/db');
  trainingRouter.get('/training', (req, res) => {
    db.query('SELECT * FROM training_data', (err, data) => {
      if (err) throw error;
      res.json(data);
      // console.log(data);
    });
  });
  return trainingRouter;
})();
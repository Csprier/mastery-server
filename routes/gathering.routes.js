module.exports = (function() {
  const gatheringRouter = require('express').Router();
  const db = require('../utility/db/db');
  gatheringRouter.get('/gathering', (req, res) => {
    db.query('SELECT * FROM gathering_data', (err, data, fields) => {
      if (err) throw error;
      res.send(data);
    });
  });
  gatheringRouter.get('/gathering/basic-items', (req, res) => {
    db.query('SELECT * FROM GatheringBasicItems', (err, data, fields) => {
      if (err) throw error;
      res.json(data);
    });
  });
  gatheringRouter.get('/gathering/rare-resources', (req, res) => {
    db.query('SELECT * FROM GatheringRareResources', (err, data, fields) => {
      if (err) throw error;
      res.json(data);
    })
  });
  
  gatheringRouter.get('/gathering/special-resources', (req, res) => {
    db.query('SELECT * FROM GatheringSpecialResources', (err, data, fields) => {
      if (err) throw error;
      res.json(data);
    })
  });
  gatheringRouter.get('/gathering/very-rare-resources', (req, res) => {
    db.query('SELECT * FROM GatheringVeryRareResources', (err, data, fields) => {
      if (err) throw error;
      res.json(data);
    })
  });

  return gatheringRouter;
})();


const express = require('express');
const db = require('../utility/db/db.js');

const gatheringRouter = express.Router();

gatheringRouter.get('/gathering', (req, res) => {
  db.query('SELECT * FROM GatheringBasicItems', (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data[0]);
  });
  res.send('GET request has been recognized.');
});

module.exports = gatheringRouter;


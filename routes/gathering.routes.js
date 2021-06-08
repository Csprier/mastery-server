const express = require('express');
const db = require('../utility/db/db.js');

const router = express.Router();

router.get('/gathering', (req, res) => {
  db.query('SELECT * FROM GatheringBasicItems', (err, data, fields) => {
    if (err) throw error;
    res.send(data);
  });
});

module.exports = router;


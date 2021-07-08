const express = require('express');
const db = require('../utility/db/db.js');

const router = express.Router();

router.get('/gathering', (req, res) => {
  db.query('SELECT * FROM GatheringBasicItems', (err, data, fields) => {
    if (err) throw error;
    res.send(data);
  });
});

router.get('/gathering/basic-items', (req, res) => {
  db.query('SELECT * FROM GatheringBasicItems', (err, data, fields) => {
    if (err) throw error;
    res.json(data);
  });
});

router.get('/gathering/rare-resources', (req, res) => {
	db.query('SELECT * FROM GatheringRareResources', (err, data, fields) => {
		if (err) throw error;
    res.json(data);
	})
});

router.get('/gathering/special-resources', (req, res) => {
	db.query('SELECT * FROM GatheringSpecialResources', (err, data, fields) => {
		if (err) throw error;
		res.json(data);
	})
});

router.get('/gathering/very-rare-resources', (req, res) => {
	db.query('SELECT * FROM GatheringVeryRareResources', (err, data, fields) => {
		if (err) throw error;
    res.json(data);
	})
});

module.exports = router;


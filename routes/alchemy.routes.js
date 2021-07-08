const express = require('express');
const db = require('../utility/db/db.js');

const router = express.Router();

app.get('/alchemy', (req, res) => {
	db.query('SELECT * FROM alchemy_data', (err, data) => {
		if (err) throw error;
		res.json(data);
	});
});

module.exports = router;
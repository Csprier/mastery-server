const express = require('express');
const db = require('../utility/db/db.js');

const router = express.Router();

/** ====================================================================/ 
 * ALCHEMY ROUTES 
 * [] - (need to be moved to their own file eventually) 
 * =============================================/ 
*/
app.get('/alchemy', (req, res) => {
	db.query('SELECT * FROM alchemy_data', (err, data) => {
		if (err) throw error;
		res.json(data);
		// console.log(data);
	});
});

module.exports = router;
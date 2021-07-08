module.exports = (function() {
	const alchemyRouter = require('express').Router();
	const db = require('../utility/db/db');
	alchemyRouter.get('/alchemy', function (req, res) {
		db.query('SELECT * FROM alchemy_data', (err, data) => {
			if (err) throw error;
			res.json(data);
		});
	});
	
	return alchemyRouter;
})();
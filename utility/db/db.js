const mysql = require('mysql');

const db = mysql.createPool({
	host: 'masterydb',
	user: 'wiz',
	password: 'cloak',
	database: 'masterydb',
});

module.exports = db;
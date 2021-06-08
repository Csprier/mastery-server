const mysql = require('mysql');

const db = mysql.createPool({
  host: process.env.MASTERY_DATABASE || 'mastery-db',
	user: process.env.MYSQL_USER || 'wiz',
	password: process.env.MYSQL_PASSWORD || 'cloak',
	database: process.env.MASTERY_DATABASE || 'mastery-db',
});

module.exports = db;
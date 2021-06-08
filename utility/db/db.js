const mysql = require('mysql');

// const db = mysql.createPool({
//   host: process.env.MASTERY_DATABASE || '172.21.0.2',
// 	user: process.env.MYSQL_USER || 'wiz',
// 	password: process.env.MYSQL_PASSWORD || 'cloak',
// 	database: process.env.MASTERY_DATABASE || 'mastery-db',
// });

const db = mysql.createPool({
  host: 'localhost',
	user: 'wiz',
	password: 'cloak',
	database: 'mastery-db',
});

module.exports = db;
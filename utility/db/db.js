const mysql = require('mysql');

const db = mysql.createPool({
  host: process.env.MASTERY_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MASTERY_DATABASE,
});

export default db;
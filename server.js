const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const dotenv = require('dotenv');

const db = require('./utility/db/db');

dotenv.config();

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

async function testConnection() {
	// const pool = mysql.createPool({
	// 	host: process.env.MASTERY_DATABASE || 'mastery-db',
	// 	user: process.env.MYSQL_USER || 'wiz',
	// 	password: process.env.MYSQL_PASSWORD || 'cloak',
	// 	database: process.env.MASTERY_DATABASE || 'mastery-db',
	// });

	db.query('SELECT * FROM Greeting', (err, data) => {
		if (err) {
			console.error(err);
		}
		console.log(data[0].message);
	});
}
testConnection();

// const pool = mysql.createPool({
// 	host: process.env.MASTERY_DATABASE || 'mastery-db',
// 	user: process.env.MYSQL_USER || 'wiz',
// 	password: process.env.MYSQL_PASSWORD || 'cloak',
// 	database: process.env.MASTERY_DATABASE || 'mastery-db',
// });

app.get('/greeting', (req, res) => {
	let message;
	db.query('SELECT * FROM Greeting', (err, data) => {
		if (err) {
			console.error(err);
		}
		console.log('MESSAGE:::', data[0]);
		message = res.json(data[0]);
	});
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));

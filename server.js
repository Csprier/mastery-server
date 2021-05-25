const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

async function testConnection() {
	const pool = mysql.createPool({
		host: 'mastery-db',
		user: 'wiz',
		password: 'cloak',
		database: 'mastery-db',
	});

	pool.query('SELECT * FROM Greeting', (err, results) => {
		if (err) {
			console.error(err);
		}
		console.log(results[0].message);
	});
}
testConnection();

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));

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

// setTimeout(() => {
async function testConnection() {
	const connection = mysql.createConnection({
		host: 'mastery-db',
		user: 'wiz',
		password: 'cloak',
		database: 'mastery-db',
	});

	await connection.connect((err) => {
		if (err) {
			return console.error('error: ' + err.message);
		}
		console.log('Connected to the Dockerized MySQL server container.');
	});
}
// }, 2000);
testConnection();

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));

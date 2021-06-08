const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const db = require('./utility/db/db');

dotenv.config();

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

async function testConnection() {
	db.query('SELECT * FROM Greeting', (err, data) => {
		if (err) {
			console.error(err);
		}
		console.log(data[0].message);
	});
}
testConnection();

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

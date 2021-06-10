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

// =============================================================
// = Routers
// const gatheringRouter = require('./routes/gathering.routes');
// =============================================================
// app.use('/gathering', gatheringRouter);

async function testConnection() {
	db.query('SELECT * FROM Greeting', (err, data) => {
		if (err) {
			console.error(err);
		}
		console.log(data[0].message);
	});
};
testConnection();


app.get('/greeting', (req, res) => {
	let message;
	db.query('SELECT * FROM Greeting', (err, data) => {
		if (err) {
			console.error(err);
		}
		console.log('/greeting:=:', data[0]);
		message = res.json(data[0]);
	});
});

/** ====================================================================/ 
 * GATHERING ROUTES 
 * [] - (need to be moved to their own file eventually) 
 * =============================================/ 
*/
app.get('/gathering', (req, res) => {
	db.query(
		`SELECT 
			bi.id, 
			bi.mastery, 
			bi.itemchance, 
			bi.dropamount,
			rr.itemchance, 
			rr.dropamount,
			sr.itemchance, 
			sr.dropamount,
			vrr.itemchance, 
			vrr.dropamount
		FROM GatheringBasicItems AS bi
		LEFT JOIN GatheringRareResources AS rr
			ON bi.id = rr.id
		LEFT JOIN GatheringSpecialResources AS sr
			ON bi.id = sr.id
		LEFT JOIN GatheringVeryRareResources AS vrr
			ON bi.id = vrr.id;`, 
	(err, data, fields) => {
    if (err) throw error;
    res.json(data);
		console.log(data);
  });
});

app.get('/gathering/basic-items', (req, res) => {
  db.query('SELECT * FROM GatheringBasicItems', (err, data, fields) => {
    if (err) throw error;
    res.json(data);
		console.log(data);
  });
});

app.get('/gathering/rare-resources', (req, res) => {
	db.query('SELECT * FROM GatheringRareResources', (err, data, fields) => {
		if (err) throw error;
    res.json(data);
		console.log(data);
	})
});

app.get('/gathering/special-resources', (req, res) => {
	db.query('SELECT * FROM GatheringSpecialResources', (err, data, fields) => {
		if (err) throw error;
		res.json(data);
		console.log(data);
	})
});

app.get('/gathering/very-rare-resources', (req, res) => {
	db.query('SELECT * FROM GatheringVeryRareResources', (err, data, fields) => {
		if (err) throw error;
    res.json(data);
		console.log(data);
	})
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));

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
const gatheringRouter = require('./routes/gathering.routes');
const alchemyRouter = require('./routes/alchemy.routes');
// =============================================================

app.use(gatheringRouter);
app.use(alchemyRouter);

// ===============================================================================================
// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use((err, req, res, next) => {
  console.error('ERROR', err);
  res.status(err.status);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : err
  });
	console.log({ message: err.message })
});

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
 * COOKING ROUTES 
 * =============================================/ 
*/
app.get('/cooking', (req, res) => {
	db.query('SELECT * FROM cooking_data', (err, data) => {
		if (err) throw error;
		res.json(data);
		// console.log(data);
	})
});

/** ====================================================================/ 
 * FISHING ROUTES 
 * [] - (need to be moved to their own file eventually) 
 * =============================================/ 
*/
app.get('/fishing', (req, res) => {
	db.query('SELECT * FROM fishing_data', (err, data) => {
		if (err) throw error;
		res.json(data);
		// console.log(data);
	});
});

/** ====================================================================/ 
 * PROCESSING ROUTES 
 * [] - (need to be moved to their own file eventually) 
 * =============================================/ 
*/
app.get('/processing', (req, res) => {
	db.query('SELECT * FROM processing_data', (err, data) => {
		if (err) throw error;
		res.json(data);
		// console.log(data);
	});
});

/** ====================================================================/ 
 * SAILING ROUTES 
 * [] - (need to be moved to their own file eventually) 
 * =============================================/ 
*/
app.get('/sailing', (req, res) => {
	db.query('SELECT * FROM sailing_data', (err, data) => {
		if (err) throw error;
		res.json(data);
		// console.log(data);
	});
});

/** ====================================================================/ 
 * TRAINING ROUTES 
 * [] - (need to be moved to their own file eventually) 
 * =============================================/ 
*/
app.get('/training', (req, res) => {
	db.query('SELECT * FROM training_data', (err, data) => {
		if (err) throw error;
		res.json(data);
		// console.log(data);
	});
});



app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));

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
const alchemyRouter = require('./routes/alchemy.routes');
const cookingRouter = require('./routes/cooking.routes');
const fishingRouter = require('./routes/fishing.routes');
const gatheringRouter = require('./routes/gathering.routes');
const greetingRouter = require('./routes/greeting.routes');
const processingRouter = require('./routes/processing.routes');
const sailingRouter = require('./routes/sailing.routes');
// =============================================================
app.use(alchemyRouter);
app.use(cookingRouter);
app.use(fishingRouter)
app.use(greetingRouter);
app.use(gatheringRouter);
app.use(processingRouter);
app.use(sailingRouter);

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

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());
// =============================================================
// Routers
const alchemyRouter = require('./routes/alchemy.routes');
const cookingRouter = require('./routes/cooking.routes');
const fishingRouter = require('./routes/fishing.routes');
const gatheringRouter = require('./routes/gathering.routes');
const greetingRouter = require('./routes/greeting.routes');
const processingRouter = require('./routes/processing.routes');
const sailingRouter = require('./routes/sailing.routes');
const trainingRouter = require('./routes/training.routes');
app.use(alchemyRouter);
app.use(cookingRouter);
app.use(fishingRouter)
app.use(greetingRouter);
app.use(gatheringRouter);
app.use(processingRouter);
app.use(sailingRouter);
app.use(trainingRouter);
// =============================================================


// ===============================================================================================
// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use((err, req, res, next) => {
  res.status(err.status);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : err
  });
	console.log({ message: err.message });
});

app.get('/greeting', (req, res) => {
	console.log(res);
	res.send(res);
});

app.listen(PORT, () => console.log(`Running on http://127.0.0.1:${PORT}!`));

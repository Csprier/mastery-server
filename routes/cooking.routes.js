module.exports = (function() {
	const cookingRouter = require('express').Router();
	const db = require('../utility/db/db'); 
  cookingRouter.get('/cooking', (req, res) => {
    db.query('SELECT * FROM cooking_data', (err, data) => {
      if (err) throw error;
      res.json(data);
    })
  });
  return cookingRouter;
})();
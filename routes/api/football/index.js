const path = require('path');
const router = require('express').Router();
//const ncaaRoutes = require('./ncaa');
const nflRoutes = require('./nfl');

// API Routes
//router.use('/ncaa', ncaaRoutes);
router.use('/nfl', nflRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
	res.status(404).send('Api call not found');
});

module.exports = router;

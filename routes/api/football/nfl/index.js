const router = require('express').Router();
const nflRoutes = require('./nfl');
const scheduleRoutes = require('./schedule');
const scoreRoutes = require('./score');

// NFL routes
router.use('/', nflRoutes);
// Schedule routes
router.use('/schedules', scheduleRoutes);
// Schedule routes
router.use('/scores', scoreRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
	res.status(404).send('Api call not found');
});

module.exports = router;

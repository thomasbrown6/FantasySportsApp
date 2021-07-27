const path = require('path');
const router = require('express').Router();
const footballRoutes = require('./football');

// Football Routes
router.use('/football', footballRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
	res.status(404).send('Api call not found');
});

module.exports = router;

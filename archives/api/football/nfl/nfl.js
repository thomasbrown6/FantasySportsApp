const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const { check, validationResult } = require('express-validator');

const goalserveUrl = `http://www.goalserve.com/getfeed/${config.get(
	'goalserveApiKey'
)}/football`;

const json = { params: { json: 1 } };

/********************************************************
 ************ NFL Scores, Schedules, Standings ***********
 *********************************************************/

// @route   GET api/football/nfl/standings
// @desc    Get NFL Standings
// @access  Public
router.get('/standings', async (req, res) => {
	try {
		const response = await axios.get(`${goalserveUrl}/nfl-standings`, json);

		if (response.data) {
			console.log(response.data);
			return res.status(200).send(response.data);
		}
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

// @route   GET api/football/nfl/scores
// @desc    Get NFL Live Scores
// @access  Public
router.get('/scores', async (req, res) => {
	try {
		const response = await axios.get(`${goalserveUrl}/nfl-scores`, json);

		if (response.data) {
			console.log(response.data);
			return res.status(200).send(response.data);
		}
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

module.exports = router;

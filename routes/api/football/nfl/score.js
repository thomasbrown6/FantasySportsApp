const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const { check, validationResult } = require('express-validator');
const pushScores = require('../../../../methods/pushScores');

const goalserveUrl = `http://www.goalserve.com/getfeed/${config.get(
	'goalserveApiKey'
)}/football`;

const json = { params: { json: 1 } };

// Models
const NFLScore = require('../../../../models/NFL/NFLScore');

/********************************************************
 ************ NFL Scores, Schedules, Standings ***********
 *********************************************************/

// @route   GET api/football/nfl/scores
// @desc    Get NFL Live Scores
// @access  Public
router.get('/', async (req, res) => {
	try {
		const response = await axios.get(`${goalserveUrl}/nfl-scores`, json);

		if (response.data) {
			console.log('GET: nfl scores');
			return res.status(200).send(response.data);
		}
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

// @route   POST api/football/nfl/scores
// @desc    Save NFL Scores
// @access  Public
router.post('/', async (req, res) => {
	try {
		console.log('POST: nfl scores');
		const response = await axios.get(`${goalserveUrl}/nfl-scores`, json);

		if (response.data) {
			let data = pushScores(response);

			await NFLScore.bulkCreate(data)
				.then(() => {
					console.log(`successfully saved NFL scores`);
					return res.status(200).send(data);
				})
				.catch((err) => {
					console.error(err.message);
					return res.status(500).send('Server error');
				});
		}

		console.log('nfl scores returned no data');
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

// @route   DELETE api/football/nfl/scores
// @desc    Delete NFL Scores
// @access  Public
router.delete('/', async (req, res) => {
	try {
		console.log('DELETE: nfl scores');

		await NFLScore.destroy({ truncate: true })
			.then((resp) => {
				console.log(`successfully deleted nfl scores`);
				return res.status(200).send(`successfully deleted nfl scores`);
			})
			.catch((err) => {
				console.error(err.message);
				return res
					.status(500)
					.send('Server error: Error deleting scores from db');
			});
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

module.exports = router;

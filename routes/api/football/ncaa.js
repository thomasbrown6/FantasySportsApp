const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const { check, validationResult } = require('express-validator');

const goalserveUrl = `http://www.goalserve.com/getfeed/${config.get(
	'goalserveApiKey'
)}/football`;

const json = { params: { json: 1 } };

/*********************************************************
 ************ NCAA Scores, Schedules, Standings **********
 *********************************************************/

// @route   GET api/football/ncaa/fbs-scores
// @desc    Get NCAA FBS Scores
// @access  Public
router.get('/fbs-scores', async (req, res) => {
	try {
		const response = await axios.get(`${goalserveUrl}/fbs-scores`, json);

		if (response.data) {
			console.log(response.data);
			return res.status(200).send(response.data);
		}
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

// @route   GET api/football/ncaa/fbs-scores
// @desc    Get NCAA FBS Scores
// @access  Public
router.get('/fcs-scores', async (req, res) => {
	try {
		const response = await axios.get(`${goalserveUrl}/fcs-scores`, json);

		if (response.data) {
			console.log(response.data);
			return res.status(200).send(response.data);
		}
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

// @route   GET api/football/ncaa/fcs-live-scores
// @desc    Get NCAA FCS Scores
// @access  Public
router.get('/fcs-live-scores', async (req, res) => {
	try {
		const response = await axios.get(`${goalserveUrl}/fcs-scores`, json);
		let data = [];

		response.data.scores.category.match.forEach((match) => {
			const game = {
				awayteam: match.awayteam,
				hometeam: match.hometeam,
				status: match.status,
				timeLeft: match.timer,
				date: match.date
			};
			data.push(game);
		});

		return res.status(200).send(data);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

// @route   GET api/football/ncaa/div3-scores
// @desc    Get NCAA Division 3 Scores
// @access  Public
router.get('/div3-scores', async (req, res) => {
	try {
		const response = await axios.get(`${goalserveUrl}/div3-scores`, json);

		if (response.data) {
			console.log(response.data);
			return res.status(200).send(response.data);
		}
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

// @route   GET api/football/ncaa/all-scores
// @desc    Get NCAA Division 3 Scores
// @access  Public
router.get('/all-scores', async (req, res) => {
	try {
		const respFBS = await axios.get(`${goalserveUrl}/fbs-scores`, json);
		const respFCS = await axios.get(`${goalserveUrl}/fcs-scores`, json);
		const respDIV3 = await axios.get(`${goalserveUrl}/div3-scores`, json);

		let response = {
			fbs: respFBS.data,
			fcs: respFCS.data,
			div3: respDIV3.data
		};

		if (response) {
			console.log(`successful request to get all NCAA live scores`);
			return res.status(200).send(response);
		}
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

// @route   GET api/football/ncaa/top25-scores
// @desc    Get NCAA FBS Top 25 Live Scores
// @access  Public
router.get('/top25-scores', async (req, res) => {
	try {
		const respFBS = await axios.get(`${goalserveUrl}/fbs-scores`, json);

		//filter for top 25
		let top25 = [];

		respFBS.category.match.forEach((match) => {});

		let response = {
			top25: respFBS.data
		};

		if (response) {
			console.log(`successful request to get all NCAA live scores`);
			return res.status(200).send(response);
		}
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

module.exports = router;

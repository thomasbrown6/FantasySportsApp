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

// @route   GET api/football/ncaa/fcs-scores
// @desc    Get NCAA FCS Scores
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
			console.log(
				`successful request to get all live scores: ${response}`
			);
			return res.status(200).send(response);
		}
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

module.exports = router;

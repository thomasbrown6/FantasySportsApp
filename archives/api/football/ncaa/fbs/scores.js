const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const { check, validationResult } = require('express-validator');

//Models
const NcaaGame = require('../../../../../models/NCAA/NcaaGame');

const goalserveUrl = `http://www.goalserve.com/getfeed/${config.get(
	'goalserveApiKey'
)}/football`;

const json = { params: { json: 1 } };

/*********************************************************
 ******************** NCAA FBS Scores ********************
 *********************************************************/

// @route   GET api/football/ncaa/fbs/scores
// @desc    Get NCAA FBS Scores
// @access  Public
router.get('/fbs/scores', async (req, res) => {
	try {
		const response = await axios.get(`${goalserveUrl}/fbs-scores`, json);

		if (response.data) {
			console.log('GET: fbs scores');
			return res.status(200).send(response.data);
		}
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

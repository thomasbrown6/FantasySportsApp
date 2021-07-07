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

// @route   GET api/football/ncaa/all/scores
// @desc    Get NCAA Division 3 Scores
// @access  Public
router.get('/all/scores', async (req, res) => {
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

// @route   POST api/football/ncaa/all/scores
// @desc    Save all NCAA Scores
// @access  Public
router.post('/all/scores', async (req, res) => {
	try {
		const respFBS = await axios.get(`${goalserveUrl}/fbs-scores`, json);
		const respFCS = await axios.get(`${goalserveUrl}/fcs-scores`, json);
		const respDIV3 = await axios.get(`${goalserveUrl}/div3-scores`, json);

		let data = [];

		const pushScores = (resp) => {
			if (
				resp &&
				resp.data &&
				resp.data.scores &&
				resp.data.scores.category &&
				resp.data.scores.category.match
			) {
				resp.data.scores.category.match.forEach((match) => {
					const game = {
						AwayTeam: match.awayteam.name,
						HomeTeam: match.hometeam.name,
						AwayTeamScore: match.awayteam.totalscore,
						HomeTeamScore: match.hometeam.totalscore,
						Status: match.status,
						TimeLeft: match.timer,
						Date: match.date
					};
					data.push(game);
				});
			}
		};

		pushScores(respFBS);
		pushScores(respFCS);
		pushScores(respDIV3);

		await NCAAGame.bulkCreate(data)
			.then((resp) => {
				console.log(`successful request to get all NCAA live scores`);
				return res.status(200).send(data);
			})
			.catch((err) => {
				console.error(err.message);
				return res.status(500).send('Server error');
			});
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

// @route   DELETE api/football/ncaa/all/scores
// @desc    Delete all NCAA Scores
// @access  Public
router.delete('/all/scores', async (req, res) => {
	try {
		await NCAAGame.destroy({ truncate: true })
			.then((resp) => {
				console.log(`successfully deleted table`);
				return res.status(200).send(`successfully deleted table`);
			})
			.catch((err) => {
				console.error(err.message);
				return res.status(500).send('Server error');
			});
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

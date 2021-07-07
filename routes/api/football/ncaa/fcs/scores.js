const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const { check, validationResult } = require('express-validator');
const { relativeTimeRounding } = require('moment');

//Models
const NcaaGame = require('../../../../../models/NCAA/NcaaGame');

const goalserveUrl = `http://www.goalserve.com/getfeed/${config.get(
	'goalserveApiKey'
)}/football`;

const json = { params: { json: 1 } };

/*********************************************************
 ********************** NCAA Scores **********************
 *********************************************************/









 
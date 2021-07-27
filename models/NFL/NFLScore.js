const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize');
const { DataTypes } = require('sequelize');
const { DateTime } = require('mssql');

const NFLScore = sequelize.define(
	'NFLScore',
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		awayTeam: {
			type: DataTypes.STRING
		},
		homeTeam: {
			type: DataTypes.STRING
		},
		awayTeamScore: {
			type: DataTypes.STRING
		},
		homeTeamScore: {
			type: DataTypes.STRING
		},
		status: {
			type: DataTypes.STRING
		},
		timeLeft: {
			type: DataTypes.STRING
		},
		time: {
			type: DataTypes.STRING
		},
		timezone: {
			type: DataTypes.STRING
		},
		date: {
			type: DataTypes.STRING
		},
		contestId: {
			type: DataTypes.STRING
		}
	},
	{
		// Other model options go here
	}
);

NFLScore.sync({ alter: true });

module.exports = NFLScore;

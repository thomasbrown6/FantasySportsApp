const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize');
const { DataTypes } = require('sequelize');
const { DateTime } = require('mssql');

const NFLSchedule = sequelize.define(
	'NFLSchedule',
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING
		},
		date: {
			type: DataTypes.STRING
		},
		time: {
			type: DataTypes.STRING
		},
		timeZone: {
			type: DataTypes.STRING
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
		}
	},
	{
		// Other model options go here
	}
);

NFLSchedule.sync({ alter: true });

module.exports = NFLSchedule;

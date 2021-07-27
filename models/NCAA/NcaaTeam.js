const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const NcaaTeam = sequelize.define(
	'NcaaTeam',
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		logo: {
			type: DataTypes.STRING,
			allowNull: true
		},
		awayTeamScore: {
			type: DataTypes.STRING
			//allowNull: false
		},
		homeTeamScore: {
			type: DataTypes.STRING
			//allowNull: false
		},
		status: {
			type: DataTypes.STRING
			//allowNull: false
		},
		timeLeft: {
			type: DataTypes.STRING
		},
		date: {
			type: DataTypes.STRING
			//allowNull: false
		}
	},
	{
		// Other model options go here
	}
);

NcaaTeam.sync({ alter: true });

module.exports = NcaaTeam;

const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize');
const { DataTypes } = require('sequelize');

const NcaaGame = sequelize.define(
	'NcaaGame',
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

NcaaGame.sync({ alter: true });

module.exports = NcaaGame;

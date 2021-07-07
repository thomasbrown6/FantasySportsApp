const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const NcaaPlayer = sequelize.define(
	'NcaaPlayer',
	{
		// Model attributes are defined here
		Id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		AwayTeam: {
			type: DataTypes.STRING,
			allowNull: false
		},
		HomeTeam: {
			type: DataTypes.STRING,
			allowNull: false
		},
		AwayTeamScore: {
			type: DataTypes.STRING
			//allowNull: false
		},
		HomeTeamScore: {
			type: DataTypes.STRING
			//allowNull: false
		},
		Status: {
			type: DataTypes.STRING
			//allowNull: false
		},
		TimeLeft: {
			type: DataTypes.STRING
		},
		Date: {
			type: DataTypes.STRING
			//allowNull: false
		}
	},
	{
		// Other model options go here
	}
);

NcaaPlayer.sync({ alter: true });

module.exports = NcaaPlayer;

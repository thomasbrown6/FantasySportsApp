const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const NcaaTeam = sequelize.define(
	'NcaaTeam',
	{
		// Model attributes are defined here
		Id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Logo: {
			type: DataTypes.STRING,
			allowNull: true
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

NcaaTeam.sync({ alter: true });

module.exports = NcaaTeam;

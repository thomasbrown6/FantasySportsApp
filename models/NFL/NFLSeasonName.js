const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize');
const { DataTypes } = require('sequelize');
const { DateTime } = require('mssql');

const NFLSeasonName = sequelize.define(
	'NFLSeasonName',
	{
		// Model attributes are defined here
		Id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: DataTypes.STRING
		}
	},
	{
		// Other model options go here
	}
);

NFLSeasonName.sync({ alter: true });

module.exports = NFLSeasonName;

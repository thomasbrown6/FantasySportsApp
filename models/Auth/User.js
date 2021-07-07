const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
	'User',
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING
			// allowNull defaults to true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		admin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	},
	{
		// Other model options go here
	}
);

User.sync({ alter: true });

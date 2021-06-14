const config = require('./sqlConfig');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.user, config.password, {
	host: config.server,
	dialect: 'mssql',
	pool: {
		max: 50,
		min: 0,
		idle: 10000
	},
	dialectOptions: {
		encrypt: true
	},
	logging: false
});

module.exports = sequelize;

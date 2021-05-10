const config = require('./sqlConfig');
const Sequelize = require('sequelize');

const sqlConnect = () => {
	const sequelize = new Sequelize(
		config.database,
		config.user,
		config.password,
		{
			host: config.server,
			dialect: 'mssql',
			pool: {
				max: 50,
				min: 0,
				idle: 10000
			},
			dialectOptions: {
				encrypt: true
			}
		}
	);

	sequelize
		.authenticate()
		.then(() => {
			console.log('connected to sql database: ' + config.server);
		})
		.catch((err) => {
			console.log('Error while connecting database: ' + err);
		});
};

module.exports = sqlConnect;

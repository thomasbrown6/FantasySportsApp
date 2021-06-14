const config = require('./sqlConfig');
const sequelize = require('./sequelize');

const sqlConnect = () => {
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

require("dotenv").config();

const Sequelize = require("sequelize");

const PROD_DB_URL = process.env.PROD_DB_URL;

const sequelize = PROD_DB_URL
	? new Sequelize(PROD_DB_URL)
	: new Sequelize(
			process.env.DB_NAME,
			process.env.DB_USER,
			process.env.DB_PASS,
			//   'Supergeil!016',
			{
				host: "localhost",
				dialect: "mysql",
				port: 3306,
			}
	  );

module.exports = sequelize;

const { Sequelize } = require("sequelize");
const { 
    DB_HOST,
    DB_USER,
    DB_DATABASE,
    DB_PASSWORD,
    DB_PORT,
    DB_DIALECT
} = require("../config")

const db = new Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD, {
       host: DB_HOST,
       dialect: DB_DIALECT,
        port: 5432
   }
);

module.exports = db;

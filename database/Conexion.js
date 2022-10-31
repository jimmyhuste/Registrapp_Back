const { Sequelize } = require("sequelize");

const db = new Sequelize(
    'registr-app',
    'postgres',
    'Exantus01', {
       host: 'localhost',
       dialect: 'postgres'
   }
);

module.exports = db;

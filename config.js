const { config } = require("dotenv")

config()

const PORT = process.env.PORT || 8000
const DB_HOST = process.env.DB_HOST ||'localhost'
const DB_PORT = process.env.DB_PORT || 5432
const DB_DATABASE = process.env.DB_DATABASE || 'registr-app'
const DB_USER = process.env.DB_USER || 'postgres'
const DB_PASSWORD = process.env.DB_PASSWORD || 'Exantus01'
const DB_DIALECT= process.env.DB_DIALECT || 'postgres'

module.exports = { 
    PORT,
    DB_PORT,
    DB_DATABASE,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DIALECT

}
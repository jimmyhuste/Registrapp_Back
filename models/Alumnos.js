const { DataTypes } = require("sequelize");
const db = require("../database/Conexion");
// importo mi modelo porofesor
const Profesores = require("../models/Profesores");

// require("../helpers/relaciones")

const Alumnos = db.define('alumnos' , {
    id_alumno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
},
apellido: {
    type: DataTypes.STRING,
    allowNull: false
    }
}
,{
    timestamps: false // deleted *created_date and *updated_date
}

);
// relaciones

console.log("model alumno created very good😊")

module.exports = Alumnos, Profesores;

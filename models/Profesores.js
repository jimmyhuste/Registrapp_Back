const { DataTypes } = require("sequelize");
const db = require("../database/Conexion");
const Alumnos = require("../models/Alumnos");



const Profesores = db.define('profesores' , {
    id_profesor: {
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



console.log("model profesor created very goodððð")

module.exports = Profesores,Alumnos;

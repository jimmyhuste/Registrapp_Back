const { DataTypes } = require("sequelize");
const db = require("../database/Conexion");



const Asistencias = db.define('asistencias' , {
    id_asistencia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
}

}
,{
  timestamps: false // deleted *created_date and *updated_date
}
);




console.log("model asistencia created very goodððð")

module.exports = Asistencias;

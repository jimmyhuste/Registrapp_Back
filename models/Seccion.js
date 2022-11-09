const { DataTypes } = require("sequelize");
const db = require("../database/Conexion");
// const Asignaturas = require("../controllers/Asignatura.controller");
const Alumnos = require("./Alumnos");




const Secciones = db.define('secciones' , {
    id_seccion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  
seccion: {
    type: DataTypes.CHAR(20),
    allowNull: false,
    unique: true
    
    }
}
,{
  timestamps: false // deleted *created_date and *updated_date
})

// Secciones.associations = function () {
//     Secciones.belongsTo(Profesores, {through: 'seccion_profe'})
   
    // Secciones.belongsTo(Alumnos, {through: 'alumno_seccion'})
    // Alumnos.belongsTo(Secciones, {through: 'alumno_seccion'})
// }

module.exports = Secciones;
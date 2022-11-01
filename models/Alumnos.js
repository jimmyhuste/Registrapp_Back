const { DataTypes } = require("sequelize");
const db = require("../database/Conexion");
// importo mi modelo porofesor
const Profesores = require("../models/Profesores");
require("../helpers/relaciones")

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

Profesores.belongsToMany(Alumnos, {
    through : 'profesor_alumno',
    foreignKey: 'profesorId'
 
})
Alumnos.belongsTo(Profesores, {
    through : 'profesor_alumno',
    foreignKey: 'profesorId'

})


Alumnos.belongsToMany(Profesores, {
    through : 'alumno_profesor',
    foreignKey: 'alumnoId'
 
})
Profesores.belongsTo(Alumnos, {
    through : 'profesor_alumno',
    foreignKey: 'alumnoId'

})


// await sequelize.sync({ force: true });
console.log("model alumno created very good😊")

module.exports = Alumnos, Profesores;

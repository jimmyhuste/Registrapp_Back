const { DataTypes } = require("sequelize");
const db = require("../database/Conexion");
// importo mi modelo porofesor
const Profesores = require("../models/Profesores");


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
Alumnos.belongsToMany(Profesores, {
    through : 'alunbo_prosor',
    foreignKey: 'alumnoId',
    sourceKey: 'id_alumno',
    as: 'profesores'
})
Profesores.belongsToMany(Alumnos, {
    through : 'alunbo_prosor',
    foreignKey: 'profesorId',
    sourceKey: 'id_profesor',
    as: 'alumnos'
})
// await sequelize.sync({ force: true });
console.log("model alumno created very good😊")

module.exports = Alumnos;

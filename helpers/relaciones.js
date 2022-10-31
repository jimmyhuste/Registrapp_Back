const Alumnos = require("../models/Alumnos");
const Profesores = require("../models/Profesores")
Alumnos.belongsToMany(Profesores, {
    foreignKey: 'alumnoId',
    sourceKey: 'id_alumno',
    as: 'profesores'
})
const prof = () => {
    Profesores.belongsToMany(Alumnos, {
        foreignKey: 'profesorId',
        sourceKey: 'id_profesor',
        as: 'alumnos'
    })
}

module.exports = {
Profesores, prof
}
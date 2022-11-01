const Alumnos = require("../models/Alumnos");
const Profesores = require("../models/Profesores");
const Asignaturas = require("../models/Asignaturas");
const Asistencias = require("../models/Asistencia");


Alumnos.belongsToMany(Profesores, {through : 'profesor_alumno' , foreignKey: 'profesorId'})
Profesores.hasOne(Alumnos, {through : 'profesor_alumno',foreignKey: 'profesorId' })

Profesores.belongsToMany(Alumnos, {through : 'alumno_profesor'  , foreignKey: 'alumnoId'})
Alumnos.hasOne(Profesores, {through : 'alumno_profesor' , foreignKey: 'alumnoId' })

Alumnos.belongsToMany(Asistencias, {through : 'asis_alumno'  , foreignKey: 'asistenciaId'})
Asistencias.hasOne(Alumnos, {through : 'asis_alumno' , foreignKey: 'asistenciaId'})

Alumnos.hasOne(Asistencias, {through : 'asis_alumno'  , foreignKey: 'alumnoId'})
Asistencias.belongsTo(Alumnos, {through : 'asis_alumno' , foreignKey: 'alumnoId'})

Profesores.belongsToMany(Asistencias, {through : 'profe_asis'  , foreignKey: 'asistenciaId'})
Asistencias.hasOne(Profesores, {through : 'profe_asis' , foreignKey: 'asistenciaId'})

Profesores.hasOne(Asistencias, {through : 'alumno_asis'  , foreignKey: 'profesorId'})
Asistencias.belongsToMany(Profesores, {through : 'alumno_asis' , foreignKey: 'profesorId'})





Asignaturas.belongsToMany(Alumnos, {through : 'alumno_asig'  , foreignKey: 'alumnoId'})
Alumnos.hasOne(Asignaturas, {through : 'alumno_asig' , foreignKey: 'alumnoId' })

Alumnos.belongsToMany(Asignaturas, {through : 'alumno_asig' , foreignKey: 'asignaturaId' })
Asignaturas.hasOne(Alumnos, {through : 'alumno_asig'  , foreignKey: 'asignaturaId'})

Asignaturas.belongsToMany(Profesores, {through : 'Profe_asig'  , foreignKey: 'profesorId'})
Profesores.hasOne(Asignaturas, {through : 'Profe_asig' , foreignKey: 'profesorId' })

Profesores.belongsToMany(Asignaturas, {through : 'Profe_asig' , foreignKey: 'asignaturaId' })
Asignaturas.hasOne(Profesores, {through : 'Profe_asig'  , foreignKey: 'asignaturaId'})


Asignaturas.belongsToMany(Asistencias, {through : 'asig_asis'  , foreignKey: 'asistenciaId'})
Asistencias.hasOne(Asignaturas, {through : 'asig_asis' , foreignKey: 'asistenciaId'})

Asistencias.belongsToMany(Asignaturas, {through : 'asig_asis' , foreignKey: 'asignaturaId'})
Asignaturas.hasOne(Asistencias, {through : 'asig_asis'  , foreignKey: 'asignaturaId'})
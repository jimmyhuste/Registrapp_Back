// import asistencia
const Alumnos = require("../models/Alumnos");
const Asignaturas = require("../models/Asignaturas");
const Asistencias = require("../models/Asistencia");
const Profesores = require("../models/Profesores");

const postAsistencia = async (req, res) => {
    try {
        const { fecha } = req.body;
        if (fecha) {
            const asistencias = await Asistencias.create({ fecha })
            res.status(201).json({
                asistencias,
                Mensaje: "Asistencia ha sido ingresada correctamente😉",
                Status: "success!"
            });
        } else {
            res.status(400).json({
                Mensaje: "Ne se ha podido ingresar la asitencia🤦",
                Action: "favor ingrese el campo fecha"
            })
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}

const getAsistencia = async (req, res) => {
    try {
        const allAsistencia = await Asistencias.findAll({
            include:[{model: Alumnos}, {model: Profesores},{model:Asignaturas}]
        });
        if (allAsistencia == 0) {
            res.status(404).json({ Mensaje: "No se ha registrado ninguna asistencia." })
        } else {
            res.status(200).json(allAsistencia);
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}


const getOneAsistencia = async (req, res) => {
    try {
        const { id } = req.params;
        const oneAsistencia = await Asistencias.findOne({
            where: { id_asistencia: id }
        });
        if (!oneAsistencia) {
            res.status(404).json({ Mensaje: `No se ha encontrado asistencia con el  ID '${id}' en la base de datos.` })
        } else {
            res.status(200).json(oneAsistencia);
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message })
    }
}

const updateAsistencia = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha } = req.body;
        if (fecha) {
            const newAsistencia = await Asistencias.findByPk(id);
            newAsistencia.fecha = fecha
            newAsistencia.save();
            res.status(200).json({
                newAsistencia,
                Mensaje: "Asistencia ha sido actualizada correctamente🤗",
                Status: "success!"
            });
        } else {
            res.status(404).json({ Mensaje: "Debes ingresar una fecha." });
        }

    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}

const deleteAsistencia = async (req, res) => {
    try {
        const { id } = req.params;
        const asisDeleted = await Asistencias.destroy({
            where: {
                id_asistencia: id
            }
        });
        if (asisDeleted == 0) {
            res.status(404).json({
                Mensaje: `No existe asistencia con el ID '${id}' `,
                Action: "No se puede borrar😒"
            });
        }else{
            res.status(200).json({
                asisDeleted,
                Mensaje: "Asistencia ha sido eliminada correctamente🤗",
                Status: "success!"
            });
        }
        
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    };
}

module.exports = {
    postAsistencia,
    getAsistencia,
    getOneAsistencia,
    updateAsistencia,
    deleteAsistencia
}
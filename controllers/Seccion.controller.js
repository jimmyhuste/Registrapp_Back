// import Seccion
// const Alumnos = require("../models/Alumnos");
// const Asignaturas = require("../models/Asignaturas");
// const Seccions = require("../models/Seccion");
// const Profesores = require("../models/Profesores");

const Alumnos = require("../models/Alumnos");
const Asignaturas = require("../models/Asig.model");
const Profesores = require("../models/Profesores");
const Secciones = require("../models/Seccion");

const postSeccion = async (req, res) => {
    try {
        const { seccion } = req.body;
        if (seccion) {
            const Seccions = await Secciones.create({ seccion })
            res.status(201).json({
                Seccions,
                Mensaje: "Seccion ha sido ingresada correctamente😉",
                Status: "success!"
            });
        } else {
            res.status(400).json({
                Mensaje: "Ne se ha podido ingresar la Seccion",
                Action: "favor ingrese el campo fecha"
            })
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}

const getSeccion = async (req, res) => {
    try {
        const allSeccion = await Secciones.findAll({
            include: [{ model: Alumnos }, { model: Profesores }, { model: Asignaturas }]
        });
        if (allSeccion == 0) {
            res.status(404).json({ Mensaje: "No se ha registrado ninguna Seccion." })
        } else {
            res.status(200).json(allSeccion);
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}


const getOneSeccion = async (req, res) => {
    try {
        const { id } = req.params;
        const oneSeccion = await Secciones.findOne({
            where: { id_seccion: id }, include: [{ model: Asignaturas }, { model: Alumnos }, { model: Profesores }]
        });
        if (!oneSeccion) {
            res.status(404).json({ Mensaje: `No se ha encontrado Seccion con el  ID '${id}' en la base de datos.` })
        } else {
            res.status(200).json(oneSeccion);
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message })
    }
}

const updateSeccion = async (req, res) => {
    try {
        const { id } = req.params;
        const { seccion } = req.body;
        if (seccion) {
            const newSeccion = await Secciones.findByPk(id);
            newSeccion.seccion = seccion
            newSeccion.save();
            res.status(200).json({
                newSeccion,
                Mensaje: "Seccion ha sido actualizada correctamente🤗",
                Status: "success!"
            });
        } else {
            res.status(404).json({ Mensaje: "Debes ingresar una sección." });
        }

    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}

const deleteSeccion = async (req, res) => {
    try {
        const { id } = req.params;
        const asisDeleted = await Secciones.destroy({
            where: {
                id_seccion: id
            }
        });
        if (asisDeleted == 0) {
            res.status(404).json({
                Mensaje: `No existe Seccion con el ID '${id}' `,
                Action: "No se puede borrar😒"
            });
        } else {
            res.status(200).json({
                asisDeleted,
                Mensaje: "Seccion ha sido eliminada correctamente🤗",
                Status: "success!"
            });
        }

    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    };
}

module.exports = {
    postSeccion,
    getSeccion,
    getOneSeccion,
    updateSeccion,
    deleteSeccion
}
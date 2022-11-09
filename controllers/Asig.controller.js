const Alumnos = require("../models/Alumnos");
const Asignaturas = require("../models/Asig.model");
const Asistencias = require("../models/Asistencia");
const Profesores = require("../models/Profesores");

const postAsig = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (nombre) {
            const cursos = await Asignaturas.create({ nombre });
            res.status(200).json({
                cursos,
                Mensaje: "Asignatura ha sido creado correctamente😉",
                Status: "success!"
            });
        } else {
            res.status(401).json({
                Mensaje: "No se ha podido crear la asignatura",
                Accion: " Debes ingresar una asignatura"
            })
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message })
    }
}

const getAsig = async (req, res) => {
    try {
        const cursos = await Asignaturas.findAll({
            include: [{ model: Asistencias }, {model:Profesores}, {model:Alumnos}]
            
        });
        if (cursos !== 0) {
            res.status(200).json({
                data: cursos
            })

        } else {
            res.status(404).json({ Mensaje: "No se ha encontrado asignatura en la base se datos" })
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}
const getOneAsig = async (req, res) => {
    try {
        const { id } = req.params;
        const OneAsig = await Asignaturas.findOne({
            where: {
                id_asignatura: id
            },
            include: [{ model: Asistencias }, {model:Profesores}, {model:Alumnos}]
        });
        if (!OneAsig) {
            res.status(404).json({ Mensaje: `No hay asignatura en la base de datos con el ID ${id} 😒` })
        } else {

            res.status(200).json({
                data: OneAsig
            });
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message })
    }
}
const updateAsig = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        if (nombre) {
            const newAsig = await Asignaturas.findByPk(id);
            newAsig.nombre = nombre;
            await newAsig.save();
            res.status(200).json({
                newAsig,
                Mensaje: "Asignatura ha sido actualizada correctamente🤗",
                Status: "success!"
            })
        } else {
            res.status(401).json({ Mensaje: "No se ha podido actualizar la asignatura🤦‍♂️" })
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}

const deleteAsig = async (req, res) => {
    try {
        const { id } = req.params;
        const asigDeleted = await Asignaturas.destroy({
            where: {
                id_asignatura: id
            }
        });
        if (asigDeleted !== 0) {
            res.status(200).json({
                asigDeleted,
                Mensaje: "Asignatura ha sido borrada correctamente😉",
                Status: "success!"
            });
        } else {
            res.status(404).json({
                Mensaje: "No se ha podido borrar la asignatura🤦",
                Status: `No hay asignatura con el ID '${id}' en la base de datos😒`
            })
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }

}


module.exports = {
    postAsig,
    getAsig,
    getOneAsig,
    updateAsig,
    deleteAsig
}
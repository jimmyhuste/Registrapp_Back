// import model
const Alumnos = require("../models/Alumnos");
const Asignaturas = require("../models/Asignaturas");
const Asistencias = require("../models/Asistencia");
const Profesores = require("../models/Profesores");

const postAsignatura = async (req, res) => {
    try {
        const { nombre, seccion } = req.body;
        if (nombre && seccion) {
            const asignaturas = await Asignaturas.create({
                nombre, seccion
            });
            return res.status(201).json({
                asignaturas,
                Mensaje: "Asignatura ha sido creado correctamente😉",
                Status: "success!"
            });
        } else {
            res.status(400).json({
                Mensaje: "No se podido cear la asignatura😒",
                Action: "Debes ingresar todos los campos."
            })
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message })
    }
}



const getAsignatura = async (req, res) => {
    try {
        const allAsig = await Asignaturas.findAll({
            include: [{ model: Asistencias }, {model:Profesores}, {model:Alumnos}]
        });
        if (allAsig !== 0) {
            return res.status(200).json(allAsig);
        } else {
            res.status(404).json({ Mensaje: "No se ha encontrado asignatura en la base de datos🤦‍♂️" })
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }


}


const getOneAsignatura = async (req, res) => {
    try {
        const { id } = req.params;
        const oneAsig = await Asignaturas.findOne({
            where: {
                id_asignatura: id
            }
        });
        if (!oneAsig) {
            res.status(404).json({ Mensaje:`No hay asignatura con el ID '${id}'  la base de datos`});
        }else {
            res.status(200).json(oneAsig);
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}

const updateAsignatura = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, seccion } = req.body;
        if (nombre && seccion) {
            const newAsig = await Asignaturas.findByPk(id);
            newAsig.nombre = nombre
            newAsig.seccion = seccion
            await newAsig.save();
            return res.status(201).json({
                newAsig,
                Mensaje: "Asignatura ha sido actualizada correctamente🤗",
                Status: "success!"
            });
        } else {
            res.status(400).json({
                Mensaje: "No se ha podido actualizar los datos",
                Action: "Favor ingrese todos los campos."
            });
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}

const deleteAsignatura = async (req, res) => {
    try {
        const { id } = req.params;
        const asigDeleted = await Asignaturas.destroy({
            where: { id_asignatura: id }
        });
        if (asigDeleted !== 0) {
            return res.status(200).json({
                asigDeleted,
                Mensaje: "Asignatura ha sido borrada correctamente😉",
                Status: "success!"
            });
        } else {
            res.status(404).json({
                Mensaje: "No se ha podido borrar la asignatura🤦",
                Status: `No hay asignatura con el ID '${id}' en la base de datos`
            });
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}

module.exports = {
    postAsignatura,
    getAsignatura,
    getOneAsignatura,
    updateAsignatura,
    deleteAsignatura
}
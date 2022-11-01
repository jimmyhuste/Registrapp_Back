// importo mi modelo Alumnos
const Alumnos = require("../models/Alumnos");
const Asignaturas = require("../models/Asignaturas");
const Asistencias = require("../models/Asistencia");
const Profesores = require("../models/Profesores");


const postProfesor = async (req, res) => {
    try {
        const { nombre, apellido } = req.body;
        if (nombre && apellido) {
            const newProfe = await Profesores.create({
                nombre, apellido
            });
            return res.status(201).json({
                newProfe,
                Mensaje: "Profesor ha sido creado correctamente",
                Status: "Success."
            });
        } else {
            res.status(400).json({
                Mensaje: "No se ha podido crear el profesor",
                Action: " Debes ongresar todos los campos."
            });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

const getProfesor = async (req, res) => {
    try {
        const allProfe = await Profesores.findAll({
            include:[{model: Alumnos} ]
        });
        if (allProfe == 0) {
            res.status(404).json({ Mensaje: "No se ha encontado profesor en la bse de datos🤦" })
        } else {
            return res.status(200).json(allProfe);
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message })
    }
}

const getOneProfesor = async (req, res) => {
    try {
        const { id } = req.params;
        const oneProf = await Profesores.findOne({
            where: {
                id_profesor: id
            }
        });
        if (!oneProf) {
            return res.status(404).json(`No se ha encontrado profesor con el ID '${id}' en la base de datos🤷`)
        } else {
            res.status(200).json(oneProf);
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}

const updateProfesor = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido } = req.body;
        const profe_Up = await Profesores.findByPk(id);
        if (profe_Up == 0) {
            res.status(404).json({ Mensaje: "No se ha encontrado datos en la base de datos." });
        }

        else if (nombre && apellido) {
            profe_Up.nombre = nombre
            profe_Up.apellido = apellido
            await profe_Up.save();
            res.status(200).json({
                profe_Up,
                Mensaje: "Profesor ha sido actualizado correctamente🤗",
                Status: "success!"
            });
        } else {
            res.status(404).json({ Mensaje: "No se ha podido actualizar, Favor ingrese todos los campos." });
        }

    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }
}

const deleteProfesor = async (req, res) => {
    try {
        const { id } = req.params;
        const profeDeleted = await Profesores.destroy({
            where: { id_profesor: id }
        });
        if (profeDeleted == 0) {
            res.status(400).json({
                Mensaje: `No existe prosefor con el ID '${id}' `,
                Action: "No se puede borrar😒"
            });

        } else {
            res.status(200).json({
                profeDeleted,
                Mensaje: "Profesor ha sido borrado correctamente😉",
                Status: "success!"
            });
        }
    } catch (error) {
        res.status(500).json({ Mensaje: error.message });
    }

}


module.exports = {
    postProfesor,
    getProfesor,
    getOneProfesor,
    updateProfesor,
    deleteProfesor
}
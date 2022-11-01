// importo mi modelo alumno

const Alumnos = require("../models/Alumnos");
const Asignaturas = require("../models/Asignaturas");
const Asistencias = require("../models/Asistencia");
const Profesores = require("../models/Profesores");

const postAlumno = async (req, res) => {
    try {
        const { nombre, apellido } = req.body;
        if (nombre && apellido) {
            const newAlumnos = await Alumnos.create({
                nombre, apellido
            });

            res.status(201).json({
                newAlumnos,
                Mensaje: "Alumno ha sido creado correctamente😉",
                Status: "success!"
            });
        } else {
            res.status(400).json({
                Mensaje: "No se podido cear el alumno😒",
                Action: "Debes ingresar todos los campos."
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

const getAlumno = async (req, res) => {
    try {
        const alumnos = await Alumnos.findAll({
            include: [{ model: Profesores}, {model: Asignaturas}, {model: Asistencias}]
        });
        if (alumnos == 0) {
            return res.status(404).json({ Message: " No existe alumno en la base de datos🤦‍♂️" })
        } else {
            // console.log(miAlumno);
            return res.status(200).json(alumnos);
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
}

const getOneAlumno = async (req, res) => {
    try {
        const { id } = req.params;
        // const {nombre, apellido} = req.body;
        const miAlumno = await Alumnos.findOne({
            where: {
                id_alumno: id
            }
        });
        if (!miAlumno) {
            return res.status(404).json(` No existe el alumno con el ID '${id}' en la base de datos😒`)
        } else {
            // console.log(miAlumno);
            return res.json(miAlumno);
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

const updateAlumno = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido } = req.body

        if (nombre && apellido) {
            const alumuno_Up = await Alumnos.findByPk(id);
            alumuno_Up.nombre = nombre;
            alumuno_Up.apellido = apellido;
            // console.log(alumuno_Up)
            await alumuno_Up.save();
            return res.json({
                alumuno_Up,
                Mensaje: "Alumno ha sido actualizado correctamente🤗",
                Status: "success!"
            });

        } else {
            return res.status(404).json({ Mensaje: "No se puede actualizar, Favor ingrese todos los campos." })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const deleteAlumno = async (req, res) => {
    try {
        const id = req.params.id
        const alumDeleted = await Alumnos.destroy({
            where: { id_alumno: id }
        });
        if (alumDeleted == 0) {
            res.status(400).json({
                Mensaje: `No existe Alumno con el ID '${id}' `,
                Action: "No se puede borrar😒"
            });

        }else{
            return res.status(200).json({
                alumDeleted,
                Mensaje: "Alumno ha sido borrado correctamente😉",
                Status: "success!"
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}



module.exports = {
    postAlumno,
    getAlumno,
    getOneAlumno,
    updateAlumno,
    deleteAlumno

};
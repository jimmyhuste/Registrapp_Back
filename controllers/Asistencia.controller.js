const postAsistencia = ( req, res)=>{
    return res.status(200).send({
        mensaje: "Creando una Asistencia.",
        Status: "Ok."
    })
}
const getAsistencia = (req , res) => {
    return res.status(200).send({
        message: "Obtener Asistencia",
        Status: "Ok."

    });
}


const getOneAsistencia = (req , res) => {
    return res.status(200).send({
        message: "Obtener por ID",
        Status: "Ok."

    });
}

const updateAsistencia = (req , res) => {
    return res.status(200).send({
        message: "Actualizar Asistencia",
        Status: "Ok."

    });
}

const deleteAsistencia = (req , res) => {
    return res.status(200).send({
        message: "Borrar Asistencia",
        Status: "Ok."

    });
}

module.exports = {
    postAsistencia,
    getAsistencia,
    getOneAsistencia,
    updateAsistencia,
    deleteAsistencia
}
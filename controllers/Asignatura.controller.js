const postAsignatura = ( req, res)=>{
    return res.status(200).send({
        mensaje: "Creando una Asignatura.",
        Status: "Ok."
    })
}
const getAsignatura = (req , res) => {
    return res.status(200).send({
        message: "Obtener Asignatura",
        Status: "Ok."

    });
}


const getOneAsignatura = (req , res) => {
    return res.status(200).send({
        message: "Obtener por ID",
        Status: "Ok."

    });
}

const updateAsignatura = (req , res) => {
    return res.status(200).send({
        message: "uActualizar Asignatura",
        Status: "Ok."

    });
}

const deleteAsignatura = (req , res) => {
    return res.status(200).send({
        message: "Borrar Asignatura",
        Status: "Ok."

    });
}

module.exports =  {
    postAsignatura,
    getAsignatura,
    getOneAsignatura,
    updateAsignatura,
    deleteAsignatura
}
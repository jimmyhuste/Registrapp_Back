

const postProfesor  = (req, res) => {

    return res.status(200).send({
        mensaje: "creando profesor",
        message: "Success"
    });
}

const getProfesor  = (req, res) => {
    
    return res.status(200).send({
        mensaje: "Obteber profesor",
        message: "Success",
        status: 'Ok'
    });
}

const getOneProfesor  = (req, res) => {

    return res.status(200).send({
        mensaje: "gObtener profesor por ID",
        message: "Success",
        status: 'Ok'
    });
}

const updateProfesor  = (req, res) => {

    return res.status(200).send({
        mensaje: "Actualizar profesor",
        message: "Success",
        status: 'Ok'
    });
}

const deleteProfesor  = (req, res) => {
    
    return res.status(200).send({
        mensaje: "Borrar profesor",
        message: "Success",
        status: 'Ok'
    });
}


module.exports = {
    postProfesor, 
    getProfesor,
    getOneProfesor,
    updateProfesor,
    deleteProfesor
}
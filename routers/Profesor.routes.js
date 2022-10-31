const express = require("express");

const router = express.Router();
// imoorto mi profesor controller
const ProfesorController = require("../controllers/Profesor.controller");
// creo mis rutas para la entidad profesor
router.post("/profesor/crear", ProfesorController.postProfesor);
router.get("/profesor/obtener", ProfesorController.getProfesor);
router.get("/profesor/obtener/:id", ProfesorController.getOneProfesor);
router.put("/profesor/actualizar/:id", ProfesorController.updateProfesor);
router.delete("/profesor/borrar/:id", ProfesorController.deleteProfesor);



module.exports = router;
const express = require("express");
const router = express.Router();

// importo mi alumno controller
const AlumnoController = require("../controllers/Alumno.controller");
// creo aqupi las rutas necesarias

router.post("/alumno/crear", AlumnoController.postAlumno);
router.get("/alumno/obtener", AlumnoController.getAlumno);
router.get("/alumno/obtener/:id", AlumnoController.getOneAlumno);
router.put("/alumno/actualizar/:id", AlumnoController.updateAlumno);
router.delete("/alumno/borrar/:id",  AlumnoController.deleteAlumno);

module.exports = router;
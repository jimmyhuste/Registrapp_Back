const express = require("express");
const router = express.Router();

// importo mi alumno controller
const AsistenciaController = require("../controllers/Asistencia.controller");
// creo aqupi las rutas necesarias

router.post("/asistencia/crear",        AsistenciaController.postAsistencia);
router.get("/asistencia/obtener",       AsistenciaController.getAsistencia);
router.get("/asistencia/obtener/:id",   AsistenciaController.getOneAsistencia);
router.put("/asistencia/actualizar/:id", AsistenciaController.updateAsistencia);
router.delete("/asistencia/borrar/:id", AsistenciaController.deleteAsistencia);

module.exports = router;
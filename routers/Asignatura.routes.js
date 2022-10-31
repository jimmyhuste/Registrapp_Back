const express = require("express");
const router = express.Router();

// importo mi alumno controller
const AsignaturaController = require("../controllers/Asignatura.controller");
// creo aqupi las rutas necesarias
router.post("/asignatura/crear",        AsignaturaController.postAsignatura);
router.get("/asignatura/obtener",       AsignaturaController.getAsignatura);
router.get("/asignatura/obtener/:id",   AsignaturaController.getOneAsignatura);
router.put("/asignatura/actualizar/:id",AsignaturaController.updateAsignatura);
router.delete("/asignatura/borrar/:id", AsignaturaController.deleteAsignatura);


module.exports = router;
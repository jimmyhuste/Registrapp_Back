const express = require("express");
const router = express.Router();

// importo mi alumno controller
const AsignaturaController = require("../controllers/Asig.controller");
// creo aqupi las rutas necesarias
router.post("/asignatura/crear",        AsignaturaController.postAsig);
router.get("/asignatura/obtener",       AsignaturaController.getAsig);
router.get("/asignatura/obtener/:id",   AsignaturaController.getOneAsig);
router.put("/asignatura/actualizar/:id",AsignaturaController.updateAsig);
router.delete("/asignatura/borrar/:id", AsignaturaController.deleteAsig);


module.exports = router;
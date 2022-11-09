const express = require("express");
const router = express.Router();

// importo mi alumno controller
const SeccionController = require("../controllers/Seccion.controller");
// creo aqupi las rutas necesarias
router.post("/seccion/crear",        SeccionController.postSeccion);
router.get("/seccion/obtener",       SeccionController.getSeccion);
router.get("/seccion/obtener/:id",   SeccionController.getOneSeccion);
router.put("/seccion/actualizar/:id",SeccionController.updateSeccion);
router.delete("/seccion/borrar/:id", SeccionController.deleteSeccion);


module.exports = router;
const express = require("express");
const cors = require("cors");

// importo mis rutas
const rutas_alumno = require("./routers/Alumno.routes");
const rutas_profesor = require("./routers/Profesor.routes");
const rutas_asig = require("./routers/Asignatura.routes");
const rutas_asistencia = require("./routers/Asistencia.routes");
const rutas_seccion = require("./routers/Seccion.routes");
// importo mi db connection
const db = require("./database/Conexion");
// importo mis modelos
require("./helpers/relaciones")

async function Connetion() {
    try {
        await db.sync({ alter: true}); // create table
        console.log("Listening the server side");
        console.log("Databse Connected😉👌")
    } catch (error) {
        console.log("No se ha podido conectar😒" , error)
        
    }
    
}

// llamando la funcion Connection();
Connetion();


const app = express();
app.use(express.json());
app.use(cors())
app.use("/api", rutas_alumno, rutas_profesor, rutas_asig, rutas_asistencia, rutas_seccion);
console.log("App Runing!!!😍");

// PORT = 8000;


app.use(express.urlencoded({extended:true}));

module.exports = app
const { DataTypes } = require("sequelize")
const Secciones = require("../models/Seccion");
const db = require("../database/Conexion");
const Asig = db.define('asignaturas', {
    id_asignatura: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
    , {
        timestamps: false // deleted *created_date and *updated_date
    }

);

Secciones.belongsTo(Asig, { through: 'asig_seccion' })
Asig.belongsTo(Secciones, { through: 'asig_seccion' })

// console.log("model Asignatura created very good😍😊👍")

module.exports = Asig;
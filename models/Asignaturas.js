const { DataTypes } = require("sequelize");
const db = require("../database/Conexion");



const Asignaturas = db.define('asignaturas' , {
    id_asignatura: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
},
seccion: {
    type: DataTypes.CHAR(20),
    allowNull: false,
    unique: true
    
    }
}
,{
    timestamps: false // deleted *created_date and *updated_date
}

);
// await sequelize.sync({ force: true });
console.log("model Asignatura created very good😍😊👍")

module.exports = Asignaturas;

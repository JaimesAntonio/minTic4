
// se crea modelo del objeto a guardar
const mongoose = require('mongoose')
 
let UserSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    apellidos: String,
    ciudad: String,
    correo: String,
    telefono: String,
    password: String
})
 
module.exports = mongoose.model('usuario', UserSchema, 'usuario')
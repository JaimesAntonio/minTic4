const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const router = express.Router();
const UserSchema = require('./models/User.js')

// Conectamos con la BD
mongoose.connect("mongodb+srv://JaimesAntonio:832275aj@missionticajo.crtucz9.mongodb.net/test")  // cadena de conexión a MongoDB
app.use(express.urlencoded({extended: true}))
app.use(express.json())

router.get("/", (req, res) =>{
    res.send("Inicio de mi API");
})

router.get('/verUsers', (req, res) => {
    UserSchema.find(function(err, data){
        if(err){
            console.log(err)
        }else{
            res.send(data); 
        }
    })
});




router.post('/user', (req, res) => {

    let newUser = new UserSchema({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        ciudad: req.body.ciudad,
        correo: req.body.correo,
        telefono: req.body.telefono,
        password: req.body.password,
    })

    newUser.save(function(err, data){
        if(err){
            console.log(err)
        }else{
        res.send("saved successfully " + newUser)
        }
    });
})



router.get('/', (req, res) => {
    res.send("Test");
});

router.get('/saludar/nombre', (req, res) => {
    var nombre = req.params.nombre; 
    res.send("Hello " + nombre);
});

router.get('/validarEdad/edad', (req, res) => {
    var edad = req.params.edad;
    var respuesta = "";
    if (edad >= 18){
        respuesta = "Mayor de edad";
    }else{
        respuesta = "Menor de edad";
    }
    res.send(respuesta);
});


app.use(router)
// prueba del servidor
app.listen(port,() => {
    console.log('Listening on '+port)
})


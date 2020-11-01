
const express = require('express')
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const RutasHome = require('./routes/RutaHome')
const RutasRegistro = require('./routes/RutasRegistro')
const RutasLogin = require('./routes/RutasLogin') 
  

require("dotenv").config(); // Variables de entorno

const app = express()

// Capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
const uri = `mongodb://127.0.0.1:27017/${process.env.DBNAME}`;
const opciones = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(uri, opciones)
  .then(() => console.log(`Conectado a mongodb: database => ${process.env.DBNAME}`))
  .catch((error) => console.log("Error de conexión", error));


// Importar rutas
app.use('/', RutasHome())
app.use('/api/user', RutasRegistro())
app.use("/api/user", RutasLogin());




const puerto = process.env.PORT || 3000
app.listen(puerto, () => {
    console.log(`Servidor corriendo en 127.0.0.1:${puerto}`);
})
const express = require("express");
const route = express.Router();
const RegistroController = require('../controllers/RegistroController')


module.exports = () => {

    route.post('/registro', RegistroController.registro)
    


    return route
    
}
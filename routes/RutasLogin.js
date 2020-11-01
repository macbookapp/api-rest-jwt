
const express = require('express')
const route = express.Router()
const LoginController = require('../controllers/LoginController')


module.exports = () => {
    
    route.post('/login', LoginController.login)


    return route
}
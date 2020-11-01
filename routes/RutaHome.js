
const express = require('express')
const route = express.Router()
const HomeController = require('../controllers/HomeController')



module.exports = () => {
    
    route.get('/', HomeController.index)

    return route
}
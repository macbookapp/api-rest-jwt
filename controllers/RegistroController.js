const User = require('../models/User')

//Para Validaciones
const joi = require('@hapi/joi') 

//Para encriptar contraseña
const bcrypt = require('bcrypt')

const schemaRegister = joi.object({
    name: joi.string().min(3).max(255).required(),
    email: joi.string().min(6).max(255).required().email(),
    password: joi.string().min(6).max(1024).required()
})

const registro = async (req, res) => {

    //Validaciones de usuario
    const { error } = schemaRegister.validate(req.body)
    
    if (error) {
        res.status(400).json({
           error: error.details[0].message
        })
    }

    const existeEmail = await User.findOne({ email: req.body.email })
    

    if (existeEmail) {
        return res.json({
            msg: 'El email ya existe'
        } )
    }

    const saltos = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, saltos);

    const user = new User({

        name: req.body.name,
        email: req.body.email,
        password: password

    })
    try {

        const userDB = await user.save()
        res.json({
        error: null,
        data: userDB

    } )

    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
    
    
}

const todosUsers = async (req, res) => {
    const usuarios = await User.find({})
    res.json( usuarios )
}

module.exports = {
    registro,
    todosUsers
}
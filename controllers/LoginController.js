const schemaLogin = joi.object({
  
  email: joi.string().min(6).max(255).required().email(),
  password: joi.string().min(6).max(1024).required(),
});

const login = (req, res) => {
    
  //Validaciones de usuario
  const { error } = schemaRegister.validate(req.body);

  if (error) {
    res.status(400).json({
      error: error.details[0].message,
    });
  }
  res.json({
    msg: "Rutas LOgin",
  });
}


module.exports = {
    login
}
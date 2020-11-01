
const index = (req, res) => {
    res.json({
        estado: true,
        msg: 'Index'
    })
}


module.exports = {
    index
}

const usuarios = require('../bancodedados')

const filtrarUsuarios = (req, res) => {
    const { stack } = req.query
    let resultado = usuarios

    console.log("Cheguei no controlador de listagem de usuarios");

    if (stack) {
        resultado = usuarios.filter((usuario) => {
            return usuario.stack === stack
        })
    }

    res.send(resultado)
};

const encontrarUmUsuario = (req, res) => {
    const usuarioEncontrado = usuarios.find((usuario) => {
        return usuario.id === Number(req.params.id)
    })
    res.send(usuarioEncontrado)
};

module.exports = {
    filtrarUsuarios,
    encontrarUmUsuario
}

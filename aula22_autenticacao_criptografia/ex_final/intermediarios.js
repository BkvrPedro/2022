const jwt = require('jsonwebtoken');
const jwtSecret = require('./jwtsecret');

const validarToken = (req, res, next) => {
    const { token } = req.body;
    if (!token) {
        return res.status(401).json({
            error: 'Token não informado'
        });
    }

    try {
        const usuario = jwt.verify(token, jwtSecret);
        req.usuario = usuario;
        next();
    } catch (error) {
        return res.status(401).json({
            error: 'Token inválido'
        });
    }
}

module.exports = { validarToken };
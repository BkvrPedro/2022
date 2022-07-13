const knex = require('../conexao');
const jwt = require('jsonwebtoken');
const senhaHash = require('../senhaHash');

const verificaLogin = async (req, res, next) => {
    const { authorization } = await req.headers;

    if (!authorization) {
        return await res.status(401).json('Não autorizado');
    }

    try {
        const token = await authorization.replace('Bearer ', '').trim();

        const { id } = await jwt.verify(token, senhaHash);

        const usuarioLogado = await knex('usuarios').where({ id }).first();
        // const query = 'select * from usuarios where id = $1';

        if (!usuarioLogado) {
            return await res.status(404).json('Usuario não encontrado');
        }

        const { senha, ...usuario } = await usuarioLogado;

        req.usuario = await usuarioLogado;

        next();
    } catch (error) {
        return await res.status(400).json(error.message);
    }
}

module.exports = verificaLogin
const knex = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const senhaHash = require('../senhaHash');
const transportador = require('../nodemailer');

const login = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(404).json('É obrigatório email e senha');
    }

    try {
        const usuario = await knex('usuarios').where('email', email).first();

        if (!usuario) {
            return res.json('usuário não encontrado');
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(400).json("Email e senha não confere");
        }

        const token = jwt.sign({ id: usuario.id }, senhaHash, { expiresIn: '8h' });

        const dadosEnvio = {
            from: "teste email <testeemail@emailteste.com.br>",
            to: email,
            subject: "Login",
            text: "Login realizado com sucesso",
        };

        transportador.sendMail(dadosEnvio, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });


        const { senha: _, ...dadosUsuario } = usuario;

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    login
}
const conexao = require('../conexao');
const securePassword = require('secure-password');
const pwd = securePassword();
const jwt = require('jsonwebtoken');
const jwtSecret = require('../jwtsecret');


const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json("Todos os campos são obrigatórios.");
    }

    try {
        const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
        const query = 'insert into usuarios (nome, email, senha) values ($1, $2, $3)';
        const usuario = await conexao.query(query, [nome, email, hash]);

        if (usuario.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar o usuario');
        }

        return res.status(200).json('Usuario cadastrado com sucesso.')
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const login = async (req, res) => {

    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json("Todos os campos são obrigatórios.");
    }


    try {
        const query = 'select * from usuarios where email = $1';
        const usuarios = await conexao.query(query, [email]);

        if (usuarios.rowCount === 0) {
            return res.status(404).json('E-mail ou senha incorretos');
        };

        const usuario = usuarios.rows[0];

        const result = await pwd.verify(Buffer.from(senha), Buffer.from(usuario.senha, "hex"))

        switch (result) {
            case securePassword.INVALID_UNRECOGNIZED_HASH:
            case securePassword.INVALID:
                return res.json('Email ou senha incorretos')
            case securePassword.VALID:
                break;
            case securePassword.VALID_NEEDS_REHASH:
                try {
                    const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
                    const query = 'update usuarios set senha = $1 where email = $2';
                    await conexao.query(query, [hash, email]);
                } catch (error) {
                }
                break;
        }

        const token = jwt.sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }, jwtSecret, {
            expiresIn: '1h'
        });

        return res.send(token);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    cadastrarUsuario,
    login
};

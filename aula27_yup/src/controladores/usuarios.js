const knex = require('../conexao');
const bcrypt = require('bcrypt');
const yup = require('yup');
const { pt } = require('yup-locales');
const { setLocale } = require('yup');

setLocale(pt);

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    const schema = yup.object().shape({
        nome: yup.string().required("O nome é obrigatório"),
        email: yup.string().email().required("O email é obrigatório"),
        senha: yup.string().required("A senha é obrigatória"),
        nome_loja: yup.string().required("O nome da loja é obrigatório")
    });

    try {
        await schema.validate(req.body);

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        // const query = 'insert into usuarios (nome, email, senha, nome_loja) values ($1, $2, $3, $4)';
        // const usuario = await conexao.query(query, [nome, email, senhaCriptografada, nome_loja]);
        const usuario = await knex('usuarios').insert({
            nome: nome,
            email: email,
            senha: senhaCriptografada,
            nome_loja: nome_loja
        }).returning('*');

        if (!usuario) {
            return res.status(404).json("Erro ao cadastrar usuário");
        }

        return await res.status(200).json(usuario);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterPerfil = async (req, res) => {
    return await res.status(200).json(req.usuario);
}

const atualizarPerfil = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome && !email && !senha && !nome_loja) {
        return res.status(404).json('É obrigatório informar ao menos um campo para atualização');
    }

    try {
        // update usuarios set nome = $1, email = $2...
        const body = {};
        const params = [];
        let n = 1;

        if (nome) {
            body.nome = nome;
            params.push(`nome = $${n}`);
            n++;
        }

        if (email) {
            if (email !== req.usuario.email) {
                // const { rowCount: quantidadeUsuarios } = await conexao.query('select * from usuarios where email = $1', [email]);
                const quantidadeUsuarios = await knex('usuarios').where({ email }).count('* as quantidade');


                if (quantidadeUsuarios > 0) {
                    return res.status(400).json("O email já existe");
                }
            }

            body.email = email;
            params.push(`email = $${n}`);
            n++;
        }

        if (senha) {
            body.senha = await bcrypt.hash(senha, 10);
            params.push(`senha = $${n}`);
            n++;
        }

        if (nome_loja) {
            body.nome_loja = nome_loja;
            params.push(`nome_loja = $${n}`);
            n++;
        }

        const valores = Object.values(body);
        valores.push(req.usuario.id);
        // const query = `update usuarios set ${params.join(', ')} where id = $${n}`;
        const usuarioAtualizado = await knex('usuarios').where({ id: req.usuario.id }).update(body).returning('*');

        if (usuarioAtualizado.rowCount === 0) {
            return res.status(400).json("O usuario não foi atualizado");
        }

        return res.status(200).json('Usuario foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarUsuario,
    obterPerfil,
    atualizarPerfil
}
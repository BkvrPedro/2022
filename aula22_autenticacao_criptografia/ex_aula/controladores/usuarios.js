const conexao = require('../conexao');
const securePassword = require('secure-password');
const pwd = securePassword();
const jwt = require('jsonwebtoken');
const jwtSecret = require('../jwt_secret');


// Exercício resolvido: para cada autor na listagem,
// faça a listagem de seus respectivos livros.

const listarUsuarios = async (req, res) => {
    try {
        const { rows: usuarios } = await conexao.query('select * from usuarios');

        if (usuarios.length === 0) {
            return res.status(404).json('Nenhum usuário encontrado');
        }

        for (const usuario of usuarios) {
            const { rows: emprestimos } = await conexao.query(`select * from emprestimos     
            where id_usuario = $1`, [usuario.id]);

            for (const emprestimo of emprestimos) {
                const { rows: livro } = await conexao.query(`select nome from livros
                where id = $1`, [emprestimo.id_livro]);

                emprestimo.livro = livro[0].nome;
            }

            usuario.emprestimos = emprestimos;
        }

        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await conexao.query('select * from usuarios where id = $1', [id]);
        const { rows: emprestimos } = await conexao.query(`select * from emprestimos WHERE id_usuario = $1`, [id]);

        if (usuario.rowCount === 0) {
            return res.status(404).json('Usuario não encontrado');
        }

        for (const emprestimo of emprestimos) {
            const { rows: livro } = await conexao.query(`select * from livros
            where id = $1`, [emprestimo.id_livro]);

            emprestimo.livro = livro[0].nome;
        }

        usuario.rows[0].emprestimos = emprestimos;

        return res.status(200).json(usuario.rows[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarUsuario = async (req, res) => {
    const { nome, idade, email, telefone, cpf, senha } = req.body;

    if (!nome) {
        return res.status(400).json("O campo nome é obrigatório.");
    }

    try {
        const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
        const query = 'insert into usuarios (nome, idade, email, telefone,cpf, senha) values ($1, $2, $3, $4, $5, $6)';
        const usuario = await conexao.query(query, [nome, idade, email, telefone, cpf, hash]);

        if (usuario.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar o usuario');
        }

        return res.status(200).json('Usuario cadastrado com sucesso.')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nome, idade, email, telefone, cpf } = req.body;

    try {
        const usuario = await conexao.query('select * from usuarios where id = $1', [id]);

        if (usuario.rowCount === 0) {
            return res.status(404).json('usuario não encontrado');
        }

        if (!nome) {
            return res.status(400).json("O campo nome é obrigatório.");
        }

        const query = `update usuarios set 
        nome = $1,
            idade = $2,
            email = $3,
            telefone = $4,
            cpf = $5
        where id = $6`;

        const usuarioAtualizado = await conexao.query(query, [nome, idade, email, telefone, cpf, id]);

        if (usuarioAtualizado.rowCount === 0) {
            return res.status(404).json('Não foi possível atualizar o usuario');
        }

        return res.status(200).json('usuario foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const usuario = await conexao.query('select * from usuarios where id = $1', [id]);

        const emprestimos = await conexao.query('select * from emprestimos where id_usuario = $1', [id]);

        if (usuario.rowCount === 0) {
            return res.status(404).json('usuario não encontrado');
        }

        if (emprestimos.rowCount > 0) {
            return res.status(400).json('usuario possui emprestimos, não é possivel excluir');
        }

        const query = 'delete from usuarios where id = $1';
        const usuarioExcluido = await conexao.query(query, [id]);

        if (usuarioExcluido.rowCount === 0) {
            return res.status(404).json('Não foi possível excluir o usuario');
        }

        return res.status(200).json('usuario foi excluido com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const login = async (req, res) => {

    const { email, senha } = req.body;

    if (!email) {
        return res.status(400).json("O campo email é obrigatório.");
    };
    if (!senha) {
        return res.status(400).json("O campo senha é obrigatório.");
    };

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
        // return res.status(200).json(`Oi, o seu usuário é ${usuario.nome}`);
    } catch (error) {
        return res.status(400).json(error.message);
    }

};

module.exports = {
    listarUsuarios,
    obterUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario,
    login
}
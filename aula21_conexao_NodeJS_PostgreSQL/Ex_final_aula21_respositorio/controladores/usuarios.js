const conexao = require('../conexao');

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
    const { nome, idade, email, telefone, cpf } = req.body;

    if (!nome) {
        return res.status(400).json("O campo nome é obrigatório.");
    }

    try {
        const query = 'insert into usuarios (nome, idade, email, telefone,cpf) values ($1, $2, $3, $4, $5)';
        const usuario = await conexao.query(query, [nome, idade, email, telefone, cpf]);

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

        const emprestimos = await conexao.query('select * from emprestimos where usuario_id = $1', [id]);

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

module.exports = {
    listarUsuarios,
    obterUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario
}
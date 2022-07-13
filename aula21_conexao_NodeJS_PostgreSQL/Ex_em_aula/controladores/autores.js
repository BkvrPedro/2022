const conexao = require('../conexao');

const listarAutores = async (req, res) => {
    try {
        const { rows: autores } = await conexao.query('SELECT * FROM autores');

        for (const autor of autores) {
            const { rows: livros } = await conexao.query('SELECT * FROM livros WHERE autor_id = $1', [autor.id]);
            autor.livros = livros;
        }

        return res.json(autores);

    } catch (error) {
        return res.status(500).send(error.mesage);
    }
};

const obterAutor = async (req, res) => {
    try {
        const autor = await conexao.query('SELECT * FROM autores WHERE id = $1', [req.params.id]);

        if (autor.rowCount === 0) {
            return res.status(404).json('Autor não encontrado');
        }

        return res.json(autor.rows[0]);

    } catch (error) {
        return res.status(500).send(error.mesage);
    }
};

const cadastrarAutor = async (req, res) => {
    try {
        const { nome, idade } = req.body;

        // console.log('entrei');
        if (!nome) {
            return res.status(400).json('Nome é obrigatório');
        }

        const autor = await conexao.query('INSERT INTO autores (nome, idade) VALUES ($1, $2)', [nome, idade]);

        if (autor.rowCount === 0) {
            return res.status(400).json('Autor já cadastrado');
        }

        return res.json('Autor cadastrado com sucesso');

    } catch (error) {
        return res.status(500).send(error.mesage);
    }

};

const editarAutor = async (req, res) => {
    try {
        if (!req.body.nome) {
            return res.status(400).json('Nome é obrigatório');
        }

        const autor = await conexao.query('SELECT * FROM autores WHERE id = $1', [req.params.id]);

        if (autor.rowCount === 0) {
            return res.status(404).json('Autor não encontrado');
        }

        const autorAtualizado = await conexao.query('UPDATE autores SET nome = $1, idade = $2 WHERE id = $3', [req.body.nome, req.body.idade, req.params.id]);

        if (autorAtualizado.rowCount === 0) {
            return res.status(404).json('Autor não encontrado');
        }

        return res.json('Autor atualizado com sucesso');

    } catch (error) {
        return res.status(500).send(error.mesage);
    }
};

const excluirAutor = async (req, res) => {

    try {
        const autor = await conexao.query('SELECT * FROM autores WHERE id = $1', [req.params.id]);

        if (autor.rowCount === 0) {
            return res.status(404).json('Autor não encontrado');
        }

        const autorExcluido = await conexao.query('DELETE FROM autores WHERE id = $1', [req.params.id]);

        if (autorExcluido.rowCount === 0) {
            return res.status(404).json('Autor não encontrado');
        }

        return res.json('Autor excluído com sucesso');

    } catch (error) {
        return res.status(500).send(error.mesage);
    }

};

module.exports = {
    listarAutores,
    obterAutor,
    editarAutor,
    cadastrarAutor,
    excluirAutor
};


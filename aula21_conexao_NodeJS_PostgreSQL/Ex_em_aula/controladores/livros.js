const conexao = require('../conexao');

const listarLivros = async (req, res) => {
    try {

        const query = `
        SELECT l.id, a.nome as nome_autor, l.nome, l.genero, l.editora, l.data_publicacao FROM livros l 
        LEFT JOIN autores a ON l.autor_id = a.id
        `;

        const { rows: livros } = await conexao.query(query);

        return res.json(livros);

    } catch (error) {
        return res.status(500).send(error.mesage);
    }
};

const obterLivro = async (req, res) => {
    try {
        const livro = await conexao.query('SELECT * FROM livros WHERE id = $1', [req.params.id]);

        if (livro.rowCount === 0) {
            return res.status(404).json('Livro não encontrado');
        }

        return res.json(livro.rows[0]);

    } catch (error) {
        return res.status(500).send(error.mesage);
    }
};

const cadastrarLivros = async (req, res) => {
    try {
        const { autor_id, nome, editora, genero, data_publicacao } = req.body;

        if (!autor_id || !nome || !editora || !genero || !data_publicacao) {
            return res.status(400).json('Todos os campos são obrigatórios');
        }

        const livro = await conexao.query('INSERT INTO livros (autor_id, nome, editora, genero, data_publicacao) VALUES ($1, $2, $3, $4, $5)', [autor_id, nome, editora, genero, data_publicacao]);

        if (livro.rowCount === 0) {
            return res.status(400).json('Livro já cadastrado');
        }

        return res.json('Livro cadastrado com sucesso');

    } catch (error) {
        return res.status(500).send(error.mesage);
    }
};

const editarLivro = async (req, res) => {
    try {
        const livro = await conexao.query('SELECT * FROM livros WHERE id = $1', [req.params.id]);

        if (livro.rowCount === 0) {
            return res.status(404).json('Livro não encontrado');
        }
        const query = `UPDATE livros 
                    SET 
                    autor_id = $1, 
                    nome = $2, 
                    editora = $3, 
                    genero = $4, 
                    data_publicacao = $5 
                    WHERE id = $6`;

        const livroAtualizado = await conexao.query(query, [req.body.autor_id, req.body.nome, req.body.editora, req.body.genero, req.body.data_publicacao, req.params.id]);

        if (livroAtualizado.rowCount === 0) {
            return res.status(404).json('Livro não encontrado');
        }

        return res.json('Livro atualizado com sucesso');

    } catch (error) {
        return res.status(500).send(error.mesage);
    }
};

const excluirLivro = async (req, res) => {

    try {
        const livro = await conexao.query('SELECT * FROM livros WHERE id = $1', [req.params.id]);

        if (livro.rowCount === 0) {
            return res.status(404).json('Livro não encontrado');
        }

        const livroExcluido = await conexao.query('DELETE FROM livros WHERE id = $1', [req.params.id]);

        if (livroExcluido.rowCount === 0) {
            return res.status(404).json('Livro não encontrado');
        }

        return res.json('Livro excluído com sucesso');

    } catch (error) {
        return res.status(500).send(error.mesage);
    }
};

module.exports = {
    listarLivros,
    obterLivro,
    cadastrarLivros,
    editarLivro,
    excluirLivro
};
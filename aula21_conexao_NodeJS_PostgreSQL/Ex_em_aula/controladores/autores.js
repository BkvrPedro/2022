const conexao = require('../conexao');

const listarAutores = async (req, res) => {
    try {
        const { rows: autores } = await conexao.query('SELECT * FROM autores');

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

};

const editarAutor = async (req, res) => {

};

const excluirAutor = async (req, res) => {

};

module.exports = {
    listarAutores,
    obterAutor,
    editarAutor,
    cadastrarAutor,
    excluirAutor
};


const conexao = require('../conexao');
const securePassword = require('secure-password');
const pwd = securePassword();
const jwt = require('jsonwebtoken');
const jwtSecret = require('../jwtsecret');

const cadastrarPokemons = async (req, res) => {
    const { nome, habilidade, imagem, apelido, token } = req.body;

    if (!nome || !habilidade || !token) {
        return res.status(400).json("O campos NOME, HABILIDADE E USUARIO_ID são obrigatórios.");
    }

    try {
        const query = `insert into pokemons 
        (usuario_id, nome, habilidades, imagem, apelido) values 
        ($1, $2, $3, $4, $5)`;
        const pokemon = await conexao.query(query, [req.usuario.id, nome, habilidade, imagem, apelido]);

        if (pokemon.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar o usuario');
        }

        return res.status(200).json('Usuario cadastrado com sucesso.')
    } catch (error) {
        return res.status(400).json(error.message);
    }
    // return res.json(req.usuario);
};

const atualizarApelido = async (req, res) => {

    try {
        const { id } = req.params;
        const { apelido } = req.body;

        if (!apelido) {
            return res.status(400).json('Apelido é não encontrado');
        }

        const query = 'update pokemons set apelido = $1 where id = $2';
        const pokemon = await conexao.query(query, [apelido, id]);

        if (pokemon.rowCount === 0) {
            return res.status(404).json('Pokemon não encontrado');
        }

        return res.status(200).json('Apelido atualizado com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }

};

const listarPokemons = async (req, res) => {

    try {
        const { rows: pokemons } = await conexao.query('select * from pokemons');

        if (pokemons.length === 0) {
            return res.status(404).json('Nenhum pokemon encontrado');
        }

        return res.status(200).json(pokemons.map(pokemon => ({ ...pokemon, habilidades: pokemon.habilidades.split(',') })));
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const listarPokemon = async (req, res) => {
    try {
        const { id } = req.params;

        const query = 'select * from pokemons where id = $1';
        const pokemon = await conexao.query(query, [id]);

        if (pokemon.rowCount === 0) {
            return res.status(404).json('Pokemon não encontrado');
        }

        return res.status(200).json(pokemon.rows[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const excluirPokemon = async (req, res) => {
    try {
        const { id } = req.params;

        const query = 'delete from pokemons where id = $1';
        const pokemon = await conexao.query(query, [id]);

        if (pokemon.rowCount === 0) {
            return res.status(404).json('Pokemon não encontrado');
        }

        return res.status(200).json('Pokemon excluido com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    cadastrarPokemons,
    atualizarApelido,
    listarPokemons,
    listarPokemon,
    excluirPokemon
};
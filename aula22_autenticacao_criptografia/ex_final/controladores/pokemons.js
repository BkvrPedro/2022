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

};

const atualizarApelido = async (req, res) => {

};

const listarPokemons = async (req, res) => {

};

const listarPokemon = async (req, res) => {

};

const excluirPokemon = async (req, res) => {

};

module.exports = {
    cadastrarPokemons,
    atualizarApelido,
    listarPokemons,
    listarPokemon,
    excluirPokemon
};
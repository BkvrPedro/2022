const express = require('express');
const usuarios = require('./controladores/usuarios');
const pokemons = require('./controladores/pokemons');
const { validarToken } = require('./intermediarios');

const rotas = express();

rotas.post('/usuarios', usuarios.cadastrarUsuario);
rotas.post('/login', usuarios.login);

rotas.use(validarToken)
rotas.post('/pokemon', pokemons.cadastrarPokemons);
rotas.post('/pokemon/:id', pokemons.atualizarApelido);
rotas.get('/pokemon', pokemons.listarPokemons);
rotas.get('/pokemon/:id', pokemons.listarPokemon);
rotas.delete('/pokemon/:id', pokemons.excluirPokemon);

module.exports = rotas;
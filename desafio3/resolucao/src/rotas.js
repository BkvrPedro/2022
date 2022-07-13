const express = require('express');
const usuarios = require('./controladores/usuarios');
const { validarToken } = require('./intermediarios');

const rotas = express();

rotas.post('/login', usuarios.login);
rotas.post('/usuarios', usuarios.cadastrarUsuario);
rotas.get('/usuarios', validarToken, usuarios.detalharUsuario);
rotas.put('/usuario', validarToken, usuarios.atualizarUsuario);
rotas.get('/categoria', validarToken, usuarios.listarCategorias);
rotas.get('/transacao', validarToken, usuarios.listarTransacoes);
rotas.get('/transacao:id', validarToken, usuarios.listarTransacao);
rotas.post('/transacao', validarToken, usuarios.cadastrarTransacao);
rotas.put('/transacao:id', validarToken, usuarios.atualizarTransacao);
rotas.delete('/transacao:id', validarToken, usuarios.deletarTransacao);
rotas.get('/transacao/extrato', validarToken, usuarios.obterExtrato);

module.exports = rotas;
const express = require('express');

const rotas = express();

const controladores = require('./controladores/controladores')

rotas.get('/contas', controladores.listarContas);
rotas.post('/contas', controladores.criarConta);
rotas.put('/contas/:numeroConta/usuario', controladores.atualizarConta);
rotas.delete('/contas/:numeroConta', controladores.deletarConta);
rotas.post('/transacoes/depositar', controladores.depositar);
rotas.post('/transacoes/sacar', controladores.sacar);
rotas.post('/transacoes/transferir', controladores.transferir);
rotas.get('/contas/saldo/', controladores.saldo);
rotas.get('/contas/extrato/', controladores.extrato);


module.exports = rotas;
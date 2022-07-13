const express = require('express');

const rotas = express();

const funcoes = require('./controladores/funcoes');


rotas.get('/convidados', funcoes.consultaListaConvidados);
rotas.post('/convidados', funcoes.adicionarConvidado);
rotas.delete('/convidados/', funcoes.removerConvidado);


module.exports = rotas;
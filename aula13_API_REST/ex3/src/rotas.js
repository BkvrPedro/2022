const express = require('express');

const rotas = express();

const funcoes = require('./controladores/controladores');

rotas.get('/livros', funcoes.consultarColecao);
rotas.get('/livros/:id', funcoes.consultarId);
rotas.post('/livros', funcoes.adicionarLivro);
rotas.put('/livros/:id', funcoes.substituirLivro);
rotas.patch('/livros/:id', funcoes.alterarLivro);
rotas.delete('/livros/:id', funcoes.removerLivro);


module.exports = rotas
const express = require('express');

const app = express();

const funcoes = require('./controladores/funcoes');



app.get('/produtos', funcoes.listarProdutos);
app.get('/produtos/:id', funcoes.listarIdProduto);
app.get('/produtos/:id/frete/:cep', funcoes.calculoFretePorCep);


app.listen(8000)
const express = require('express');

const app = express();

const { listarColecao, listarPorId } = require('./controladores/funcoes');

app.get('/pokemon', listarColecao);
app.get('/pokemon/:nomeOuId', listarPorId);

app.listen(8000)
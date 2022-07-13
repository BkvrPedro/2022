const express = require('express');

const app = express();

const { enderecos } = require('./controladores/funcoes');

app.use(express.json());

app.get('/enderecos/:cep', enderecos);


app.listen(3000)    
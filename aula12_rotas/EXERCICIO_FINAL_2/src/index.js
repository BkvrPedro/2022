const express = require('express');
const app = express();

const { adicionar, remover, base } = require('./controladores/acoes')

app.get('/', base)
app.get('/remover', remover)
app.get('/adicionar', adicionar)


app.listen(8000)
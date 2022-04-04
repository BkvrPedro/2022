const express = require('express');

const app = express();

const { todosImoveis, imoveisPorId } = require('./roteador');

app.use(todosImoveis)
app.use(imoveisPorId)


app.listen(8000)
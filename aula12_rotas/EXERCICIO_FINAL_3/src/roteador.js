const express = require('express');

const app = express();

const { get, getPorId } = require('./controladores/imoveis')

const todosImoveis = app.get('/imoveis', get)
const imoveisPorId = app.get('/imoveis/:id', getPorId)



module.exports = { todosImoveis, imoveisPorId }
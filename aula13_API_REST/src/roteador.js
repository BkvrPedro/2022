const express = require('express');

const roteador = express();

const alunos = require('./controladores/alunos');

roteador.get('/alunos', alunos.listarTodosAlunos);
roteador.get('/alunos/:id', alunos.listarAluno);
roteador.post('/alunos/', alunos.cadastrarAluno);
roteador.delete('/alunos/:id', alunos.deletarAluno);

module.exports = roteador;
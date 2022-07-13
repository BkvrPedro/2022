const express = require('express');
const rotas = require('./rotas');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(rotas);

// criado a var port para inserir value nas configs do heroku
const port = process.env.PORT || 3000;

app.listen(port, () => { console.log('Servidor rodando na porta 3000') });
const express = require('express')

const app = express()

const { filtrarUsuarios, encontrarUmUsuario } = require('./controladores/usuarios')

const primeiroIntermediario = (req, res, next) => {
    console.log("Passei no primeiro  intermediario");
    next()
}

const segundoIntermediario = (req, res, next) => {
    console.log("Passei no segundo intermediario");
    next()
}

const intermediarioDaRota = (req, res, next) => {
    console.log("Passei no intermediario da rota");
    next()
}

app.use(primeiroIntermediario);

app.use(segundoIntermediario);

// localhost:3000/usuarios
app.get('/usuarios', intermediarioDaRota, filtrarUsuarios)


// http://localhost:3000/usuarios/2
app.get('/usuarios/:id', encontrarUmUsuario)


app.listen(3000)
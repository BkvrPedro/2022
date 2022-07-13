const express = require('express');

const servidor = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let i = 0

servidor.get('/', (req, res) => {

    while (i < jogadores.length) {
        res.send(`É a vez de ${jogadores[i]} jogar!`)
        i++

        if (i == jogadores.length) {
            i = 0
        }
    }
})


servidor.listen(3000)
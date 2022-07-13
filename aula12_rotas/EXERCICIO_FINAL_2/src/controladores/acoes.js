const jogadores = require('../bancodedados')

let i = 0

const base = (req, res) => {
    while (i < jogadores.length) {
        res.send(`É a vez de ${jogadores[i]} jogar!`)
        i++

        if (i == jogadores.length) {
            i = 0
        }
    }
}

const remover = (req, res) => {

    let { indice } = req.query

    if (indice > jogadores.length) {
        res.send(`Não existe jogador no índice informado ${indice} para ser removido.`)
    }

    jogadores.splice(indice, 1)
    res.send(jogadores)
}

const adicionar = (req, res) => {

    let { nome, indice } = req.query

    nome = nome[0].toUpperCase() + nome.substr(1)

    if (indice > jogadores.length) {
        res.send(`O índice informado ${indice} não existe no array. Novo jogador não adicionado.`)
    }

    if (indice) {
        jogadores.splice(indice, 0, nome)
    } else {
        jogadores.push(nome)
    }

    res.send(jogadores)
}

module.exports = {
    base,
    remover,
    adicionar
}
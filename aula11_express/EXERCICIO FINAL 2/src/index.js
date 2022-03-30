const express = require('express')
const app = express()

let minutos = 0
let segundos = 0

let estaPausado = false
let cronometro

const iniciarCronometro = () => {
    cronometro = setInterval(() => {
        segundos++

        if (segundos > 59) {
            minutos++
            segundos = 0
        }
    }, 1000)
}

const formataMinESeg = (minutos, segundos) => {

    const minutosFormatado = String(minutos).padStart(2, '0')
    const segundosFormatado = String(segundos).padStart(2, '0')

    const pluralMin = minutos > 1 ? `minutos` : `minuto`
    const pluralSeg = segundos > 1 ? `segundos` : `segundo`

    return [`${minutosFormatado} ${pluralMin}`, `${segundosFormatado} ${pluralSeg}`]
}

app.get('/', (req, res) => {
    const [minuto, segundo] = formataMinESeg(minutos, segundos)

    res.send(`Tempo atual do cronômetro: ${minuto} e ${segundo}`)
})

app.get('/iniciar', (req, res) => {
    estaPausado = false

    //para evitar duas ou mais instancias do setInterval
    clearInterval(cronometro)

    iniciarCronometro()
    res.send(`Cronômetro iniciado!`)
}
)

app.get('/pausar', (req, res) => {
    estaPausado = true

    clearInterval(cronometro)
    res.send(`Cronômetro pausado!`)
})

app.get('/continuar', (req, res) => {
    estaPausado = false

    iniciarCronometro()
    res.send(`Cronômetro continuado!`)
})

app.get('/zerar', (req, res) => {

    if (estaPausado) {
        clearInterval(cronometro)
    }

    segundos = 0
    minutos = 0

    res.send(`Cronômetro zerado!`)

})

app.listen(8000, (error) => {
    if (error) {
        console.log("Erro ao iniciar servidor")
    } else {
        console.log("Servidor iniciado... \nAcesse: http://localhost:8000")
    }
})
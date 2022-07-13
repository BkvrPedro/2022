const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const maiorCidade = cidades.reduce((acumulado, elementoAtual, indice, array) => {

    let cidade = acumulado

    if (elementoAtual.length > cidade.length) {
        cidade = elementoAtual
    }

    return cidade
})

console.log(maiorCidade)
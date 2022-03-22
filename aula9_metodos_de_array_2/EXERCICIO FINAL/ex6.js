const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const novoArray = cidades.filter((cidade) => {

    return cidade.length < 9

})

const strings = novoArray.join(", ")

console.log(strings)
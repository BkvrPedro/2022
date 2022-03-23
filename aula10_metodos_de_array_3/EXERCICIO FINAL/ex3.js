const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const resultado = numeros.reduce((acumulado, elementoAtual, indice, array) => {

    let maior = acumulado

    if (elementoAtual > maior) {
        maior = elementoAtual
    }

    return maior

})

console.log(resultado)
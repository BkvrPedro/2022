const array = [0, 1, 2, 3, 4]

const resultado = array.reduce((acumulador, elementoAtual, index, array) => {

    return acumulador + elementoAtual
}, 7)

console.log(resultado)
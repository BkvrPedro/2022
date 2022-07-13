const array = [1, 2, 4, 50, 3, 44, 7, 32]

// ORDENAÇÃO CRESCENTE
// return -1 nao altera o retorno
// return 1 faz com que a segunda opção venha primeiro

array.sort((primeiroElemento, segundoElemento) => {

    return primeiroElemento - segundoElemento
})

console.log(array)

// ORDENAÇÃO DESCRESCENTE

// array.sort((primeiroElemento, segundoElemento) => {

//     if (primeiroElemento < segundoElemento) {
//         return 1;
//     }

//     if (primeiroElemento > segundoElemento) {
//         return -1;
//     }

//     return 0
// })

// console.log(array)
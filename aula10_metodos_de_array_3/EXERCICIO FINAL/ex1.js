const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

// A - Ordem crescente
console.log(numeros.sort((a, b) => { return a - b }))

// B - Ordem descrescente
console.log(numeros.sort((a, b) => { return b - a }))

// C - Crescente com base em Unicode
console.log(numeros.sort())

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

// D - Ordem alfabetica crescente
console.log(frutas.sort((a, b) => { return a.localeCompare(b) }))

// E - Ordem alfabetica decrescente
console.log(frutas.sort((a, b) => { return b.localeCompare(a) }))

// F - Ordem alfabetica crescente e por quantidade de caracteres
console.log(frutas.sort((a, b) => { return (a.length < b.length) }))
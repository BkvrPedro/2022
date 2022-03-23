const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const b = numeros.sort((a, b) => {
    return b - a
})

console.log(b)
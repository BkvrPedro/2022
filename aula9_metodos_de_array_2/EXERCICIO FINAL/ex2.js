const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const contador = palavras.some((palavra) => {
    return palavra.length > 5
})

if (contador) {
    console.log("Existe palavra inválida")
} else {
    console.log("Array validado")
}

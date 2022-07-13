const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const validador = palavras.some((item) => {

    return item === "cerveja" || item === "vodka"

})

if (validador) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!")
} else {
    console.log("tudo certo, vamos as compras!")
}
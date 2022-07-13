
let produtosConsumidos = [
    {
        nome: "Picanha",
        precoUnit: 6990,
        quantidade: 1,
    },
    {
        nome: "Skol",
        precoUnit: 350,
        quantidade: 6,
    },
    {
        nome: "Carvao",
        precoUnit: 2590,
        quantidade: 1,
    }
]


const cartao = {
    nome: "Thiago",
    idade: 25,
    produtosConsumidos
}

console.log(`${cartao.nome}, ${cartao.idade}`)

cartao.idade = 27
console.log(cartao.idade)

console.log(cartao.produtosConsumidos[0].nome)
console.log(cartao.produtosConsumidos[2].precoUnit)
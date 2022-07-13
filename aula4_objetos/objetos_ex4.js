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

let totalAPagar = 0

for (let produto of produtosConsumidos) {
    totalAPagar += produto.precoUnit * produto.quantidade
}

const cartao = {
    nome: "Thiago",
    idade: 25,
    produtosConsumidos
}

console.log(`Sr(a) ${cartao.nome}, o total a pagar é ${(totalAPagar / 100).toFixed(2)}`)


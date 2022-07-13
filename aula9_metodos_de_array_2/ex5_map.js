const produtos = [
    { nome: "arroz", preco: 500 },
    { nome: "carne", preco: 3200 },
    { nome: "biscoito", preco: 450 },
    { nome: "banana", preco: 320 }
]

const desconto = produtos.map((produto) => {
    return {
        nome: produto.nome,
        preco: produto.preco,
        desconto: (produto.preco * (10 / 100))
    }
})

console.log(desconto)
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    calcularTotalAPagar: function () {

        let somaPreco = 0

        for (itens of this.produtos) {
            (somaPreco += (itens.qtd * itens.precoUnit) / 100)
        }

        return somaPreco.toFixed(2)
    },

    totalDeItens: function () {

        let qtdTotalItens = 0

        for (item of this.produtos) {
            qtdTotalItens += item.qtd
        }

        return qtdTotalItens
    },



    imprimirResumo: function () {

        console.log(`Cliente ${this.nomeDoCliente}`);
        console.log(`Total de ítens: ${this.totalDeItens()} ${this.totalDeItens() < 2 ? "ítem" : "ítens"}`);
        console.log(`Total a pagar: ${this.calcularTotalAPagar()}`)
    },

    addProduto: function (produto) {

        let produtoIgual = false;

        for (item of this.produtos) {
            if (item.id === produto.id) {
                item.qtd += produto.qtd
                produtoIgual = true;
            }
        }

        if (produtoIgual === false) {
            this.produtos.push(produto)

        }
    },

    imprimirDetalhes: function () {

        console.log(`Cliente: ${this.nomeDoCliente}`);

        for (item of this.produtos) {
            console.log(`Item ${item.id} - ${item.nome} - ${item.qtd} und - R$ ${(item.precoUnit / 100).toFixed(2)} `)
        }

        console.log(`Total de itens: ${this.totalDeItens()} itens`)
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()}`)


    },

    calcularDesconto: function () {                                                                             // VER ESSE BLOCO

        let descontoPorQuantidade = 0;
        let descontoPorValorTotal = 0;
        let descontoFinal = 0;

        if (this.totalDeItens() > 4) {
            for (item of this.produtos) {
                if (descontoPorQuantidade > item.precoUnit) {
                    descontoPorQuantidade = item.precoUnit;
                }
            }
        }

        if (this.calcularTotalAPagar() > 100) {
            descontoPorValorTotal = this.calcularTotalAPagar() * 0.1;
        }

        if (descontoPorQuantidade > descontoPorValorTotal) {
            descontoFinal = descontoPorQuantidade;
        } else {
            descontoFinal = descontoPorValorTotal;
        }

        return descontoFinal.toFixed(2);
    }
}




const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);
// carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);

carrinho.imprimirResumo();

carrinho.imprimirDetalhes()

console.log(carrinho.calcularDesconto())
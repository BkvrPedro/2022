const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {

        for (operacao of valor) {
            if (operacao.quantidade > 0) {
                this.saldo += operacao.quantidade;
                this.historicos.push(operacao)
                console.log(`Depósito de ${(operacao.quantidade / 100).toFixed(2)} realizado para o cliente ${this.nome} `)
            }
        }
    },

    sacar: function (valor) {

        for (operacao of valor)
            if (operacao.quantidade > this.saldo) {
                console.log(`Saldo insuficiente para o saque de: ${this.nome} `)
            } else {
                this.saldo -= operacao.quantidade;
                this.historicos.push(operacao)
                console.log(`Saque de ${(operacao.quantidade / 100).toFixed(2)} realizado para o cliente ${this.nome} `)
            }

    },

    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo ${(this.saldo / 100).toFixed(2)} `)
        console.log('Histórico:');

        for (item of this.historicos) {
            console.log(`${item.tipo} de R$ ${(item.quantidade / 100).toFixed(2)} `)
        }
    }
}

const deposito = [
    {
        tipo: "Depósito",
        quantidade: 10000,
    },
]

const saque = [
    {
        tipo: "Saque",
        quantidade: 50000,
    },
    {
        tipo: "Saque",
        quantidade: 5000,
    }
]


contaBancaria.depositar(deposito)
contaBancaria.sacar(saque)
contaBancaria.extrato()
// console.log(contaBancaria)
const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === true) {
            console.log(`Este carro já está ligado`)
        } else {
            this.ligado = true;

        }
    },

    desligar: function () {
        if (this.ligado === false) {
            console.log(`Este carro já está desligado`)
        } else {
            this.ligado = false;
            this.velocidade = 0;

        }
    },

    acelerar: function () {
        if (this.ligado === false) {
            console.log(`Não é possível acelerar um carro desligado`)
        } else {
            this.velocidade += 10;

        }
    },

    desacelerar: function () {
        if (this.ligado === false) {
            console.log(`Não é possível desacelerar um carro desligado`)
        } else {
            this.velocidade -= 10;

        }

    },

    situacao: function () {
        console.log(`Carro ${this.ligado ? "ligado" : "desligado"}. Velocidade ${this.velocidade}`)
    }
}

carro.desligar()
carro.ligar()
carro.situacao()
carro.ligar()
carro.acelerar()
carro.situacao()
carro.acelerar()
carro.situacao()
carro.desacelerar()
carro.situacao()
carro.desligar()
carro.situacao()
carro.acelerar()
carro.desacelerar()
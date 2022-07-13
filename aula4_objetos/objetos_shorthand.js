// MODO 1 DE FAZER UM OBJ DENTRO DE OUTRO OBJ

const pessoa = {
    nome: "Pedro",
    altura: 1.90,
    peso: 85,
    carro: {
        marca: "Volkswagen",
        modelo: "Fusca",
        ano: 1980,
        potencia: 60
    }
}

console.log(pessoa.carro);
console.log(pessoa.carro.modelo);

// MODO 2 - FAZER UMA CONST COM OS DADOS ANTES E APLICAR DENTRO DEPOIS.

const carro2 = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 1996,
    potencia: 77
}

const pessoa2 = {
    nome: "Jorge",
    altura: 1.70,
    peso: 65,
    carro2
}

console.log(pessoa2.carro2);
console.log(pessoa2.carro2.modelo);
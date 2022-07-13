// SPREAD = ...

const pessoa = {
    nome: "Pedro",
    idade: 25,
    cidade: "Tupa",
    profissao: "DEV"
}

const endereco = {
    rua: "Brasil",
    numero: "111",
    bairro: "Jardim America"
}

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 25
};

console.log(objetoFundido) // IMPRIME OS DADOS DA CONST PESSOA E CONST ENDEREÇO UM SEGUIDO DO OUTRO CRIANDO UM OBJETO SÓ
                           // AINDA ACRESCENTAMOS UMA NOVA PROPRIEDADE PARA EXEMPLO DE UMA NOVA INSERCAO
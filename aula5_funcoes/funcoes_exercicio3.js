const pessoa1 = {
    nome: "José",
    idade: 22,
    profissao: "pedreiro"
}

function definirFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem"
    } else if (idade <= 65) {
        return "Adulto(a)"
    } else {
        return "Idoso(a)"
    }
}

function apresentar(pessoa) {

    const faixaEtaria = definirFaixaEtaria(pessoa.idade)

    console.log(`Sou é ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
}

apresentar(pessoa1)
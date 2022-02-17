const pessoa1 = {
    nome: "José",
    idade: 32,
    profissao: "pedreiro"
}

const pessoa2 = {
    nome: "Antonio",
    idade: 85,
    profissao: "professor"
}

const pessoa3 = {
    nome: "Pedro",
    idade: 22,
    profissao: "DEV"
}

function frase(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade < 65) {
        console.log(`Sou é ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else {
        console.log(`Sou é ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    }
}

frase(pessoa1)
frase(pessoa2)
frase(pessoa3)
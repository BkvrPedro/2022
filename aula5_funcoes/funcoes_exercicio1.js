const pessoa = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
}

function dadosPessoa(pessoa) {
    console.log(`Olá! Me chamo ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)
}

dadosPessoa(pessoa)
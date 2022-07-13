const pessoa = {
    nome: "Pedro Bukvar",
    idade: 25,
    cidade: "Tupa",
    profissao: "dev"
}

// const nome = pessoa.nome;
// const idade = pessoa.idade;
// const cidade = pessoa.cidade;
// const profissao = pessoa.profissao;

// QUANDO TEMOS OBJETOS MUITO GRANDES E TEMOS QUE DESESTRUTURAR USAMOS A SINTAXE ABAIXO

const { nome, idade, ...outros } = pessoa

console.log(nome, idade) // pedro bukvar 25

console.log(outros) // IMPRIME O RESTANTE NAO CITADO NO CONSOLE.LOG ACIMA
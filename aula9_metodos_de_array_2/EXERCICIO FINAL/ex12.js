const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
]


const programador = pessoas.filter((pessoa) => {
    return pessoa.idade > 20 && pessoa.profissao === "Programador"
})

const jornalista = pessoas.filter((pessoa) => {
    return pessoa.idade > 30 && pessoa.profissao === "Jornalista"
})

const jovens = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Programador" && pessoa.idade < 30 || pessoa.profissao === "Jornalista" && pessoa.idade < 30
})

console.log(jovens)
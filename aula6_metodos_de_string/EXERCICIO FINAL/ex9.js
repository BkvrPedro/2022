const nome = 'Pedro Borges Bukvar';

let arrayNome = nome.split(' ')
let nomeMinusculo = nome.toLowerCase()

for (item of nome) {
    nomeMinusculo = nomeMinusculo.replace(" ", "")
}


nomeMinusculo = "@" + nomeMinusculo.slice(0, 13)


console.log(nomeMinusculo)
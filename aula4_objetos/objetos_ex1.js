const pessoa = {
    nome: "Pedro Bukvar",
    idade: 25,
    altura: 1.90,
    temCNH: true,
    apelidos: ["Pedrão", "Bukvrau", "Branco"]
}

// TERNARIO: (IGUAL AO SE DO EXCEL) PESSOA TEM CNH? SE SIM "POSSUI CNH" : SE NAO "NAO POSSUI CNH"
let textoCNH = (pessoa.temCNH ? "possui CNH" : "não possui CNH")

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, ${textoCNH} e os seguintes apelidos:`)

// CRIANDO UM FOR PARA QUE ELE TRAGA TODOS OS APELIDOS DO ARRAY SEM PRECISAR DEFINIR ([1][2][3] ETC....) QUAL IMPRIMIR 

for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)
}
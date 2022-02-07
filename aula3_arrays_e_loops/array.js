const nome1 = "Pedro"
const nome2 = "Thiago"
const nome3 = "Camila"

const nomesDosEstudantes = ["Pedro", "Thiago", "Camila"]   // o array é quando usamos [] e inserimos todos os dados dentro

console.log(nomesDosEstudantes)
console.log(nomesDosEstudantes[2])   // Camila

// TAMBEM PODEMOS ALTERAR APENAS 1 DADO

nomesDosEstudantes[2] = "Jose";   // IMPRIMIRA JOSE AO INVES DE CAMILA
console.log(nomesDosEstudantes);

// DESCOBRIR O TAMANHO DE UM ARRAY

console.log(nomesDosEstudantes.length)  // IMPRIME QUANTOS DADOS TEM DENTRO DO ARRAY

//INSERINDO MAIS 1 DADO NO ARRAY
nomesDosEstudantes[nomesDosEstudantes.length] = "Vetor"
console.log(nomesDosEstudantes)
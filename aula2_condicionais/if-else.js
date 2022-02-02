const idade = 66;

// MENOR DE 18 --> MENOR DE IDADE
// MAIOR DE IDADE E MENOR OU IGUAL A 65 ANOS -->  ADULTO
// ACIMA DE 65 ANOS --> IDOSO

// EXEMPLO DE FORMATAÇÃO PADRAO

// if (idade < 18) {
//     console.log("Menor de idade")
// } else {
//     if (idade <= 65) {
//         console.log("Adulto")
//     } else {
//         console.log("Idoso")
//     }
// }

// PS: É O MESMO CODIGO 

//RECOMENDAÇÃO DE FORMATAÇÃO SEM AS CHAVES {} PARA QUE O CODIGO SE ALINHE

if (idade < 18) {
    console.log("Menor de idade")
} else if (idade <= 65) {
    console.log("Adulto")
} else {
    console.log("Idoso")
}

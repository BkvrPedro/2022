let eMaior = 16 >= 16;
console.log(eMaior);

// IMPRIME UM VALOR TRUE POIS 16 E = A 16

let eIgual = 10 == 15;
console.log(eIgual)
// USANDO == SIGNIFICA UMA PERGUNTA SE E IGUAL (10 E IGUAL A 15?)

let eDiferente = 10 != 25;
console.log(eDiferente)
// USANDO != SIGNIFICA UMA PERGUNTA SE E DIFERENTE (10 É DIFERENTE DE 25?)

let eIdentico = 18 === "18";
console.log(eIdentico)
// USANDO === PERGUNTAMOS SE E IDENTICO (IDENTICO É TANTO NO SEU CONTEUDO QUANDO NO TIPO DO INPUT), OU SEJA, 18 (STRING) É IGUAL A  18(NUMBER)? O RESULTADO É FALSE
// RESUMO: == PERGUNTA SE É IGUAL E === PERGUNTA SE É IDENTICO

let naoIdentico = 10 !== 25;
console.log(naoIdentico)
// USANDO !== PERGUNTAMOS SE NAO É IDENTICO

let idade = 17;

if (idade >= 18) {
    // É EXECUTADO CASO A CONDICAO SEJA VERDADEIRA
    console.log("É Maior de idade")
} else {
    // É EXECUTADO CASO A CONDICAO ACIMA NAO SEJA VERDADERA (SE IDADE FOR MENOR QUE 18, ENTÃO IMPRIME NA TELA "É DE MENOR!")
    console.log("É de menor!")
}




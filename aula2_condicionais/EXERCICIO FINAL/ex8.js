const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (possuiPatologia === true || altura < 150 || idade < 18 || idade > 65) {
    console.log("ACESSO NEGADO")
} else if (ehEstudante === true || idade < 18) {
    console.log("10 Reais")
} else {
    console.log("20 Reais")
}
const temIngresso = true;
const censura = 16;
const idade = 15;
const estaComOsPais = true;

//USANDO O  || (barra vertical) TEMOS O SIGNIFICADO DE "OU" (OU SEJA, SE QUALQUER UMA DAS CONDIÇÕES FOREM VERDADEIRAS, PASSARA PARA PROXIMA LINHA)

if (temIngresso === true) {
    if (idade >= censura || estaComOsPais === true) {
        console.log("Acesso Liberado");
    } else {
        console.log("Acesso Negado");
    }

} else {
    console.log("Sem Ingresso - Acesso Negado");
}


// SE POSSUI INGRESSO (>) E IDADE MAIOR QUE A CENSURA = ENTRADA LIBERADA
// SE POSSUI INGRESS0 (>) E IDADE MENOR QUE PERMITIDA = IDADE MENOR QUE PERMITIDA
// FECHADO PELO ULTIMO ELSE - SE NAO POSSUI INGRESSO = NAO POSSUI INGRESSO


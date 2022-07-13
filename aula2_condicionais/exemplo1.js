const temIngresso = false;
const censura = 16;
const idade = 15;

if (temIngresso === true) {
    if (idade >= censura) {
        console.log("Entrada Liberada")
    } else { console.log("Idade menor que a permitida") }

} else console.log("Não possui ingresso")

// SE POSSUI INGRESSO (>) E IDADE MAIOR QUE A CENSURA = ENTRADA LIBERADA
// SE POSSUI INGRESS0 (>) E IDADE MENOR QUE PERMITIDA = IDADE MENOR QUE PERMITIDA
// FECHADO PELO ULTIMO ELSE - SE NAO POSSUI INGRESSO = NAO POSSUI INGRESSO


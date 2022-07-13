const palavra = "Alemana"

let encontrado = false;
for (let letra of palavra) {
    if (letra === "h") {
        console.log("Tem a letra h");
        encontrado = true
        break
    }

}


if (!encontrado) {
    console.log("Não tem a letra h")
}


// USAMOS O BREAK POIS SE NAO COLOCASSEMOS ELE IMPRIMIRIA "TEM A LETRA H" EM TODOS OS H DA PALAVRA
// NESSE CASO, ECONTRANDO A PRIMEIRA ELE AUTOMATICAMENTE IRA PARAR O LOOP
function inverterString(texto) {

    const array = texto.split("");
    array.reverse()


    const resultado = array.join("")

    console.log(resultado)


    // let textoInvertido = "";
    // for (letra of array) {
    //     textoInvertido += letra;
    // }
    // console.log(textoInvertido)

}

inverterString("Cubos Academy")
const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// {
//     const frutasInvertidas = frutas.reverse()

//     let resultado = frutasInvertidas.join(", ")

//     console.log(resultado)
// }
{
    frutas.splice(0, 1)
    frutas.splice(frutas.length - 1, 1, "Melão")

    console.log(frutas)
}
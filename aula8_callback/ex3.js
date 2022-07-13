const array = [
    {
        nome: "Pedro",
        stack: "Front",
    },
    {
        nome: "Cleiton",
        stack: "Back",
    },
    {
        nome: "Cledson",
        stack: "Back",
    },
]

const buscador = (array, callback) => {

    let lista = [];
    let indice = 0;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            lista[indice] = array[i];
            indice++
        }
    }

    return lista;
}

const resultado = buscador(array, (item) => {

    return item.stack === 'Back'
})

console.log(resultado)
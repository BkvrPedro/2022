const usuarios = [
    {
        nome: "Pedro",
        idade: 25
    },
    {
        nome: "Thiago",
        idade: 47
    },
    {
        nome: "Taina",
        idade: 27
    },
    {
        nome: "Tais",
        idade: 35
    },
]

const ficalizarFesta = (arrayObjetos) => {

    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade >= 18
    })

    if (resultado) {
        console.log("Festa Liberada!")
    } else {
        console.log("Possui menor de idade")
    }
}

ficalizarFesta(usuarios)